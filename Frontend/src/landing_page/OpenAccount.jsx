import "./OpenAccount.css"
function OpenAccount() {
  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <h1 className="mt-4 mb-3 open-account-heading">Open a Zerodha Account</h1>
        <p className="mb-4 text-muted">
         Modern platform and apps,to investments , and flat ₹20 intraday and F&Q trads.
        </p>
        <button className="signup-btn btn btn-primary  text-light fs-5 p-2">
          Sign up now
        </button>
      </div>
    </div>
  );
}

export default OpenAccount;
