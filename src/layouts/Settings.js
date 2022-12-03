import { useStateContext } from "../contexts/Context";
const Settings = () => {
  const { setNavMenu } = useStateContext();
  return (
    <div className="fixed right-4 bottom-16 h-96 w-56 z-50 max-w-3xl bg-white shadow-lg border ">
      <div className="absolute h-4 w-4 bg-white rotate-45 -bottom-1 right-2 "></div>
      <div className="px-2">
        <h4>Switch between Navbar and Sidebar</h4>
        <div className="flex flex-row gap-2">
          <input
            type="radio"
            name="radio"
            onChange={() => {
              setNavMenu("navbar");
            }}
          />
          <label>Navbar</label>
        </div>
        <div className="flex flex-row gap-2">
          <input
            type="radio"
            name="radio"
            onChange={() => setNavMenu("sidebar")}
          />
          <label>Sidebar</label>
        </div>
      </div>
    </div>
  );
};

export default Settings;
