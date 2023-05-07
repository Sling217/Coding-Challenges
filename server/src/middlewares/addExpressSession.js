import session from "cookie-session";
import configuration from "../config.js";

const addExpressSession = (app) => {
  app.use(
    session({
      name: "Coding-Challenges-session",
      keys: [configuration.session.secret],
      resave: true,
      maxAge: configuration.maxAge,
    })
  );
};

export default addExpressSession;