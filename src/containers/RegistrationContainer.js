/**
 * This container contains all the functions and data to dispatch them to the RegistrationScreen.
 *
 * @format
 * @flow
 */

import { connect } from "react-redux";
import * as yup from "yup";

import RegistrationScreen from "../components/screens/RegistrationScreen";
import { register } from "../middlewares/UserAccountMiddleware/registrationMiddleware";

function equalTo(ref, msg) {
  return this.test({
    name: "equalTo",
    exclusive: false,
    message: msg,
    params: {
      reference: ref.path
    },
    test: function(value) {
      return value === this.resolve(ref);
    }
  });
}
yup.addMethod(yup.string, "equalTo", equalTo);

const validationSchema = yup.object().shape({
  confirmPassword: yup
    .string()
    .equalTo(yup.ref("password"), "Passwords must be equal"),
  password: yup
    .string()
    .min(4, "Password must be more than 3 symbols")
    .max(15, "Password must be less than 16 symbols")
    .matches(
      /^([0-9A-Za-z]*)$/,
      "Password can contain only latin letters and digits"
    )
    .required("Password is a required field"),
  username: yup
    .string()
    .min(3, "Username must be more than 2 symbols")
    .max(12, "Username must be less than 13 symbols")
    .matches(
      /^([0-9A-Za-z]*)$/,
      "Username can contain only latin letters and digits"
    )
    .required("Username is a required field")
});

const mapStateToProps = (state, ownProps) => {
  /*********************************************************************************************************************
   * validationSchema isn't data from the state or ownProps, but it is dispatched to the screen in this way.           *
   * It has been done in this way, because creating a class, which can be used in the 'connect' method,                *
   * for only return                                                                                                   *
   * <RegistrationScreen register={register} navigation={this.props.navigation} validationScheme={validationScheme} /> *
   * in the 'render' method is overhead in my mind.                                                                    *
   *********************************************************************************************************************/

  return {
    goTo: () => ownProps.navigation.navigate("Login"),
    validationSchema: validationSchema
  };
};

const mapDispatchToProps = { register };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegistrationScreen);
