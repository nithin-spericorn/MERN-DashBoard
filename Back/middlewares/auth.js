const jwt = require('jsonwebtoken');
const {failedResponse} = require('../helper/response')
const service = require('../api/auth/service')
const {
	jwt: { secretkey },
} = require('../config');

module.exports = async(req,res,next) =>{
    try{
        const baseUrl = ['/api/book']
        const token = req.header('Authorization')?.replace('Bearer ', '');

        if (!token){
            if(baseUrl.includes(req.baseUrl) && req.method === 'GET') return next();
            return res.json(failedResponse({}, 'Access denied. No token provided.',401));
        }

		let decoded = null
        try{
             decoded = jwt.verify(token, secretkey);
        }catch(e){
            return res.json(failedResponse({},"session expired",401));
        }
		
        const user = await service.find({id: decoded?.id})

        if(!user)  return res.json(failedResponse({}, 'Invalid Token',401));
        
        req.user = decoded;

        return next()

    }catch(e){
        return res.status(500).json({
            success: false,
            message: e.message,
            data: {},
        });
    }
}