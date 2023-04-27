import "../../../chunks/index.js";
import "../../../chunks/utils.js";
import { r as router, c as createContext } from "../../../chunks/router.js";
const load = async (event) => {
  const key = router.createCaller(await createContext(event)).bookings.payForBooking();
  return { key };
};
export {
  load
};
