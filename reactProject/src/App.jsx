import './css/style.css'
import logo from './assets/Logo.png';
import shape from './assets/realShape.svg';


function App() {
  return (
    <>
      <div className="grid h-screen q-full grid-rows-[34%_70%]">
        <div className="bg-[#0A2C59] login relative">
          <div className="logo-div w-full flex justify-center items-center mt-5">
            <img src={logo} className="logo" alt="" />
          </div>
          <div className="flex justify-center items-center mt-2 text-center w-full">
            <p className="w-46 text-white font-medium">
              Sangguniang Kabataan Puting Bato West Calaca City
            </p>
          </div>

          <img
            src={shape}
            className="loginframe absolute bottom-0 left-0 w-full h-[60px] -mb-12 object-cover md:none"
            alt=""
          />
        </div>

        <div className="bg-[#FFFFFF] mt-10 flex justify-center align-items-center">
          <div className="shadow-lg h-70 w-70 mt-10 rounded-md md:w-h-100">
            <div className="w-full flex justify-center align-items-center mt-4">
              <h2 className="font-sans">Sign In</h2>
            </div>
            <div className="w-full flex justify-center align-items-center mt-4">
              <form action="home.html" className="font-sans" method="POST">
                <input
                  type="text"
                  className="username p-2 bg-[#f5f5f4] p-xm rounded-sm"
                  placeholder="Username:"
                /><br />
                <br />
                <input
                  type="password"
                  className="Password p-2 bg-[#f5f5f4] p-2 rounded-sm mb-4"
                  placeholder="Password:"
                /><br />
                <label className="text-xs">
                  <input type="checkbox" name="remember" />
                  Remember Me
                </label>
                <button
                  type="submit"
                  className="w-full h-9 bg-[#0A2C59] text-white rounded-sm mt-2"
                >
                  Sign In
                </button>
                <p className="text-xs mt-2 text-black">
                  Don't have an Account? <span className="text-[#0A2C59]">Sign Up</span>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

export default App;
