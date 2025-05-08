function App() {
  return (
    <>
      <div classNameNameName="grid h-screen grid-rows-[34%_70%]">
        <div classNameNameName="bg-[#0A2C59] login relative">
          <div classNameNameName="logo-div w-full flex justify-center items-center mt-5">
            <img src="./assets/Logo.png" classNameNameName="logo" alt="" />
          </div>
          <div classNameNameName="flex justify-center items-center mt-2 text-center w-full">
            <p classNameNameName="w-46 text-white font-medium">
              Sangguniang Kabataan Puting Bato West Calaca City
            </p>
          </div>

          {/* Positioned SVG image at the bottom */}
          <img
            src="./assets/Shape.svg"
            classNameNameName="loginframe absolute bottom-0 left-0 w-full h-[60px] -mb-12 object-cover md:none"
            alt=""
          />
        </div>

        <div classNameNameName="bg-[#FFFFFF] mt-10 flex justify-center align-items-center">
          <div classNameNameName="shadow-lg h-70 w-70 mt-10 rounded-md md:w-h-100">
            <div classNameNameName="w-full flex justify-center align-items-center mt-4">
              <h2 classNameNameName="font-sans">Sign In</h2>
            </div>
            <div classNameNameName="w-full flex justify-center align-items-center mt-4">
              <form action="home.html" classNameNameName="font-sans" method="POST">
                <input
                  type="text"
                  classNameNameName="username p-2 bg-[#f5f5f4] p-xm rounded-sm"
                  placeholder="Username:"
                /><br />
                <br />
                <input
                  type="password"
                  classNameNameName="Password p-2 bg-[#f5f5f4] p-2 rounded-sm mb-4"
                  placeholder="Password:"
                /><br />
                <label classNameNameName="text-xs">
                  <input type="checkbox" name="remember" />
                  Remember Me
                </label>
                <button
                  type="submit"
                  classNameNameName="w-full h-9 bg-[#0A2C59] text-white rounded-sm mt-2"
                >
                  Sign In
                </button>
                <p classNameNameName="text-xs mt-2 text-black">
                  Don't have an Account? <span classNameNameName="text-[#0A2C59]">Sign Up</span>
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
