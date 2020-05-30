import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Spinner from "../../components/layout/Spinner";
import homeBackground from "../../assets/images/home-background.jpg";
const Home = ({ loading }) => {
  if (loading) return <Spinner />;
  return (
    <div
      className="img img-fluid"
      style={{
        backgroundImage: `url("${homeBackground}")`,
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
