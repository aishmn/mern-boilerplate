import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Spinner from "../../components/layout/Spinner";
const Home = ({ loading }) => {
  if (loading) return <Spinner />;
  return (
    <div
      className="container"
      style={{
        backgroundImage: `url("https://images.pexels.com/photos/3352873/pexels-photo-3352873.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260")`,
        height: "100vh",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    ></div>
  );
};

Home.propTypes = {
  loading: PropTypes.bool,
};
const mapStateToProps = (state) => ({
  loading: state.auth.loading,
});

export default connect(mapStateToProps, null)(Home);
