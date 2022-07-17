import "./featuredinfo.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import { useEffect, useState } from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import { getAllTickets, createTickets } from "./FeaturedInfoSlice";
import moment from "moment";
import configureStore from "../../store/configureStore";
const store = configureStore();

const Featuredinfo = ({
  getAllTickets,
  createTickets,
  responsedata,
  isLoading,
}) => {
  const [ticket, setTicket] = useState(null);

  useEffect(() => {
    getAllTickets();
  }, []);
  useEffect(() => {
    let {
      responsedata: { tickets },
    } = responsedata;

    setTicket(tickets?.[0]);
  }, [responsedata]);

  const currentTime = (date) => {
    return date;
  };
  const currentDayName = (date) => {
    return moment(date).format("dddd");
  };
  const currentDay = (date) => {
    let day = moment(date).format("D");
    let year = moment(date).format("YYYY");
    return `${day + " : " + year}`.trim("");
  };

  return (
    <>
      <br />
      <br />
      <div className="featured">
        <div className="featuredItem">
          <span className="featuredTitle"></span>
          <div className="featuredMoneyContainer">
            <span className="featuredMoneyRate">
              <h1>{ticket?.total_tickets || 0}</h1>
            </span>
          </div>
          <span className="featuredSub">Total ticket</span>
        </div>
        <div className="featuredItem">
          <span className="featuredTitle"></span>
          <div className="featuredMoneyContainer">
            <span className="featuredMoneyRate">
              <h1>{ticket?.closed_tickets || 0}</h1>
            </span>
          </div>
          <span className="featuredSub">Closed ticket</span>
        </div>
        <div className="featuredItem">
          <span className="featuredTitle"></span>
          <div className="featuredMoneyContainer">
            <span className="featuredMoneyRate">
              <h1>{ticket?.open_tickets || 0}</h1>
            </span>
          </div>
          <span className="featuredSub">open ticket</span>
        </div>
        <div className="featuredItem">
          <span className="featuredTitle"></span>
          <div className="featuredMoneyContainer">
            <span className="featuredMoneyRate">
              <h1>{ticket?.pending_tickets || 0}</h1>
            </span>
          </div>
          <span className="featuredSub">pending ticket</span>
        </div>
        <div className="featuredItem">
          <span className="featuredTitle"></span>
          <div className="featuredMoneyContainer">
            <span className="featuredMoney">
              {currentTime(moment().format("hh:mm:ss a"))}
            </span>

            <span className="featuredMoneyRate"></span>
          </div>
          <section>Dubai</section>
          <hr></hr>
          <span>{currentDayName(moment().format("YYYY-MM-DD HH:mm:ss"))}</span>
          <div>
            <span>{currentDay(moment().format("YYYY-MM-DD"))}</span>
          </div>
        </div>
      </div>
    </>
  );
};
const mapDispatchToProps = (dispatch) => ({
  getAllTickets: () => dispatch(getAllTickets()),
  createTickets: () => dispatch(createTickets()),
});
const mapStateToProps = (state) => ({
  responsedata: state.entities.tickets,
  isLoading: state.entities.tickets,
});

export default connect(mapStateToProps, mapDispatchToProps)(Featuredinfo);
