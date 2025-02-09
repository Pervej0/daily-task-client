import { removeUser } from "../auth.service";

const logOutUser = (router: any) => {
  removeUser();
  // router.push("/");
  router.refresh();
};

export default logOutUser;
