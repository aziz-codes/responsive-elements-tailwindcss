import { useStateContext } from "../contexts/Context";
const Settings = () => {
  const { setNavMenu } = useStateContext();

  return (
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
  );
};

export default Settings;
