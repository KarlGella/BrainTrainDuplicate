import React from "react";

const Profile = ({ user }) => {
  const progress = [
    { quarter: "1st" },
    { quarter: "2nd" },
    { quarter: "3rd" },
    { quarter: "4th" },
  ];

  var medals = user.medals;

  const renderedCards = progress.map((item, index) => {
    switch (index) {
      case 0:
        var attempt = user.firstAttempts;
        var highEasy = user.firstHighEasy;
        var highMedium = user.firstHighMedium;
        var highHard = user.firstHighHard;
        break;

      case 1:
        attempt = user.secondAttempts;
        highEasy = user.secondHighEasy;
        highMedium = user.secondHighMedium;
        highHard = user.secondHighHard;
        break;
      case 2:
        attempt = user.thirdAttempts;
        highEasy = user.thirdHighEasy;
        highMedium = user.thirdHighMedium;
        highHard = user.thirdHighHard;
        break;
      case 3:
        attempt = user.fourthAttempts;
        highEasy = user.fourthHighEasy;
        highMedium = user.fourthHighMedium;
        highHard = user.fourthHighHard;
        break;

      default:
        break;
    }

    var totalNum = 0;
    highEasy ? (totalNum += 10) : (highEasy = 0);
    highMedium ? (totalNum += 20) : (highMedium = 0);
    highHard ? (totalNum += 40) : (highHard = 0);

    return (
      <div className="col-6 mt-4">
        <div className="card mb-4 p-3">
          <div
            className="overflow-hidden position-relative border-radius-lg bg-cover h-100"
            style={{ backgroundImage: `url('/img/${index + 1}qbg.png')` }}
          >
            <div className="card-body p-3 text-white">
              <div className="row">
                <h5 className="mb-1 text-white">{`Progress Report for ${item.quarter} Quarter`}</h5>
                <div className="col-xl-6 col-md-6 mb-xl-0 mb-4">
                  <div>
                    <div className="card-body px-1 pb-0">
                      <p className="mb-4 text-sm">
                        Total number of attempts: {attempt}
                      </p>
                      <p className="mb-4 text-sm">
                        Highest score (Easy): {highEasy}
                      </p>
                      <p className="mb-4 text-sm">
                        Highest score (Medium): {highMedium}
                      </p>
                      <p className="mb-4 text-sm">
                        Highest score (Hard): {highHard}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-md-6 mb-xl-0 mb-4">
                  <div>
                    <div className="card-body px-1 pb-0">
                      Total Percentage:{" "}
                      {((highEasy + highMedium + highHard) / totalNum) * 100}%
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });

  var renderedMedals =
    user.medals === undefined
      ? ""
      : medals.map((item) => {
          return (
            <>
              <li className="list-inline-item">
                <img alt="" src={`img/${item}.png`} />
              </li>
            </>
          );
        });

  const onLogoutClick = () => {
    localStorage.removeItem("auth");
    window.location.assign("/api/logout");
  };
  return (
    <>
      <div className="container-fluid">
        <div
          className="page-header min-height-300 border-radius-xl mt-4"
          style={{
            backgroundImage: "url('/img/curved-images/curved0.jpg')",
            backgroundPositionY: "50%",
          }}
        >
          <span className="mask bg-gradient-primary opacity-6"></span>
        </div>
        <div className="card card-body blur shadow-blur mx-4 mt-n6 overflow-hidden">
          <div className="row gx-4">
            <div className="col-auto my-auto">
              <div className="h-100">
                <h5 className="mb-1">{user.username}</h5>
                <p className="mb-0 font-weight-bold text-sm">{user.email}</p>
              </div>
            </div>
            <div>
              <button
                id="signOutBtn"
                className="btn bg-secondary mb-0 px-2"
                type="button"
              >
                <a onClick={(e) => onLogoutClick()} className="text-white">
                  Sign out
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid py-4">
        <div className="row">
          {renderedCards}
          <div className="col-12 mt-4">
            <div className="card mb-4 p-3">
              <div
                className="overflow-hidden position-relative border-radius-lg bg-cover h-100"
                style={{
                  backgroundImage:
                    "url('/img/curved-images/white-curved.jpeg')",
                }}
              >
                <div className="card-body p-3 text-white">
                  <div className="row">
                    <h6 className="mb-1 text-white">Achievements</h6>
                    <p className="text-sm">
                      Medals acquired from practice assessments will be shown
                      here:
                    </p>
                    <ul className="list-inline-group">{renderedMedals}</ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
