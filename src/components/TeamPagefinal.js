import "./Team.css";
import grish from "../assets/images/grish.jpeg";
// import "../assets/images";
function TeamPageFinal() {
  return (
    <div className="App">
      <div style={{ width: "100%", textAlign: "center" }}>
        <h1 style={{color:"white",fontWeight:"bold",fontSize:"30px"}}>Founding Members</h1>
      </div>
      <div
        style={{
          width: "100%",
          margin: "0",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: "90%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <div class="row">
            <div class="column">
              <div
                class="card"
                style={{ width: "340px", borderRadius: "10px",height:"35rem" }}
              >
                <div
                  style={{ display: "flex", padding: "1rem", height: "35%" }}
                >
                  <img
                    src="https://media.istockphoto.com/photos/code-programming-for-website-editors-view-picture-id1290492381?b=1&k=20&m=1290492381&s=170667a&w=0&h=NQSXJKhncCP1GLzDkD8KPZsCOh1wldDj5RZbPVJztxQ= "
                    style={{ width: "100%", borderRadius: "10px" }}
                    alt="Jane"
                  />
                </div>
                <div class="container">
                  <h2>Abhishek Krishna</h2>
                  <div class="col">
                    <p class="title" style={{ fontSize: "20px" ,marginBottom:"-2px"}}>
                      Founder,CEO and Chief Architect
                    </p>
                    <p class="title" style={{marginBottom:"-2px"}}>IIT Roorkee</p>
                  </div>
                  <p class="title">
                    Experienced Entrepreneur and coder. Before Muzix Krishna has
                    founded Kcolbchain: Blockchain development and research
                    community Ojam:
                  </p>
                  <p class="title">example@example.com</p>
                  <p class="title">
                    <button
                      class="button"
                      style={{ borderRadius: "1rem",  marginTop: "-0.6rem" }}
                    >
                      Contact
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="column">
              <div
                class="card"
                style={{ width: "340px", borderRadius: "10px" ,height:"35rem"}}
              >
                <div
                  style={{ display: "flex", padding: "1rem", height: "35%" }}
                >
                  <img
                    src={grish}
                    style={{ width: "100%", borderRadius: "6px" }}
                    alt="Jane"
                  />
                </div>
                <div class="container">
                  <h2>Girish Kumar</h2>
                  <div class="col">
                    <p class="title" style={{ fontSize: "20px" ,marginBottom:"-4px"}}>
                      CoFounder
                    </p>
                    <p class="title" style={{marginBottom:"14px"}}>IIT Roorkee</p>
                  </div>
                  <p class="title">
                    Dropped out for Entrepreneurship Girish has as an experience
                    of building & running multi crore business from scratch.
                    Tagbin : Built multi crore digital experiences online 
                  </p>
                  <p class="title">example@example.com</p>
                  <p class="title">
                    <button
                      class="button"
                      style={{ borderRadius: "1rem", marginTop: "0.3rem" }}
                    >
                      Contact
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="column">
              <div
                class="card"
                style={{ width: "340px", borderRadius: "10px",height:"35rem" }}
              >
                <div
                  style={{ display: "flex", padding: "1rem", height: "35%" }}
                >
                  <img
                    src="https://media.istockphoto.com/photos/code-programming-for-website-editors-view-picture-id1290492381?b=1&k=20&m=1290492381&s=170667a&w=0&h=NQSXJKhncCP1GLzDkD8KPZsCOh1wldDj5RZbPVJztxQ= "
                    style={{ width: "100%", borderRadius: "10px" }}
                    alt="Jane"
                  />
                </div>
                <div class="container">
                  <h2>Noriko Takasaki</h2>
                  <div class="col">
                    <p class="title" style={{ fontSize: "20px",marginBottom:"-4px" }}>
                      Cofounder
                    </p>
                    <p class="title" style={{marginBottom:"-2px"}}>PHD(Music)</p>
                  </div>
                  <p class="title">
                    Noriko is a Musician, Music Producer, Composer, and Tabla
                    player. She has worked with Entrepreneurs, artists and
                    labels from across the world and runs several websites in
                    Japanese.
                  </p>
                  <p class="title">example@example.com</p>
                  <p class="title">
                    <button class="button" style={{ borderRadius: "1rem" }}>
                      Contact
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br/>
      <div style={{ width: "100%", textAlign: "center" }}>
        <h1 style={{color:"white",fontWeight:"bold",fontSize:"30px"}}>Advisors</h1>
      </div>
      <div
        style={{
          width: "100%",
          margin: "0",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: "90%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <div class="row">
            <div class="column">
              <div
                class="card"
                style={{ width: "340px", borderRadius: "10px" ,height:"32rem"}}
              >
                <div
                  style={{ display: "flex", padding: "1rem", height: "40%" }}
                >
                  <img
                    src="https://media.istockphoto.com/photos/code-programming-for-website-editors-view-picture-id1290492381?b=1&k=20&m=1290492381&s=170667a&w=0&h=NQSXJKhncCP1GLzDkD8KPZsCOh1wldDj5RZbPVJztxQ= "
                    style={{ width: "100%", borderRadius: "10px" }}
                    alt="Jane"
                  />
                </div>
                <div class="container">
                  <h2>Akhil Srivastava</h2>
                  <div class="col">
                    <p class="title" style={{ fontSize: "20px" }}>
                      Serial Entrepreneur
                    </p>
                    <p class="title">
                      Stanford University Graduate School of Business
                    </p>
                  </div>
                  {/* <p class="title">
                    Experienced Entrepreneur and coder. Before Muzix Krishna has
                    founded Kcolbchain: Blockchain development and research
                    community Ojam: Mobile Audio Workstation Neuron Gym:
                    Neuroscience based brain Training Games
                  </p> */}
                  <p class="title">example@example.com</p>
                  <p class="title">
                    <button
                      class="button"
                      style={{ borderRadius: "1rem", marginTop: "0.6rem" }}
                    >
                      Contact
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="column">
              <div
                class="card"
                style={{ width: "340px", borderRadius: "10px",height:"32rem" }}
              >
                <div
                  style={{ display: "flex", padding: "1rem", height: "40%" }}
                >
                  <img
                    src="https://media.istockphoto.com/photos/code-programming-for-website-editors-view-picture-id1290492381?b=1&k=20&m=1290492381&s=170667a&w=0&h=NQSXJKhncCP1GLzDkD8KPZsCOh1wldDj5RZbPVJztxQ= "
                    style={{ width: "100%", borderRadius: "10px" }}
                    alt="Jane"
                  />
                </div>
                <div class="container">
                  <h2>Kunal Singh</h2>
                  <div class="col">
                    <p class="title" style={{ fontSize: "20px" }}>
                      Specialist in Investment & Finance
                    </p>
                    <p class="title">Purdue & Stanford University Graduate</p>
                  </div>
                  {/* <p class="title">
                    Dropped out for Entrepreneurship Girish has as an experience
                    of building & running multi crore business from scratch.
                    Tagbin : Built multi crore digital experiences online &
                    offline. Skills : Business, Growth, Partnerships
                  </p> */}
                  <p class="title">example@example.com</p>
                  <p class="title">
                    <button
                      class="button"
                      style={{ borderRadius: "1rem", marginTop: "3.9rem" }}
                    >
                      Contact
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="column">
              <div
                class="card"
                style={{ width: "340px", borderRadius: "10px" ,height:"32rem"}}
              >
                <div
                  style={{ display: "flex", padding: "1rem", height: "40%" }}
                >
                  <img
                    src="https://media.istockphoto.com/photos/code-programming-for-website-editors-view-picture-id1290492381?b=1&k=20&m=1290492381&s=170667a&w=0&h=NQSXJKhncCP1GLzDkD8KPZsCOh1wldDj5RZbPVJztxQ= "
                    style={{ width: "100%", borderRadius: "10px" }}
                    alt="Jane"
                  />
                </div>
                <div class="container">
                  <h2>Garima Singh</h2>
                  <div class="col">
                    {/* <p class="title" style={{ fontSize: "20px" }}>
                    Blockchain Consultant | DeFi Solutions |
Cryptocurrency Exchangel Crypto Investor 
                    </p>
                    <p class="title">PHD(Music)</p> */}
                  </div>
                  <p class="title">
                    Blockchain Consultant | DeFi Solutions | Cryptocurrency
                    Exchangel Crypto Investor |ICO, IEO advisor| NET Marketplace
                    (Business Intelligence & Analytics | DAPP | DEX | Smart
                    Contract
                  </p>
                  <p class="title">example@example.com</p>
                  <p class="title">
                    <button class="button" style={{ borderRadius: "4.9rem" }}>
                      Contact
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

<br/>
      <hr/>
      <br/>
      <div style={{ width: "100%", textAlign: "center" }}>
        <h1 style={{color:"white",fontWeight:"bold",fontSize:"30px"}}>Core team</h1>
      </div>

      <div
        style={{
          width: "100%",
          margin: "0",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: "90%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <div class="row">
            <div class="column">
              <div
                class="card"
                style={{ width: "340px", borderRadius: "10px" ,height:"25rem"}}
              >
                <div
                  style={{ display: "flex", padding: "1rem", height: "50%" }}
                >
                  <img
                    src="https://media.istockphoto.com/photos/code-programming-for-website-editors-view-picture-id1290492381?b=1&k=20&m=1290492381&s=170667a&w=0&h=NQSXJKhncCP1GLzDkD8KPZsCOh1wldDj5RZbPVJztxQ= "
                    style={{ width: "100%", borderRadius: "10px" }}
                    alt="Jane"
                  />
                </div>
                <div class="container">
                  <h2>Nikhil Gupta</h2>
                  
            
                  <p class="title">Marketing & Business</p>
                  <p class="title">
                    <button
                      class="button"
                      style={{ borderRadius: "1rem", marginTop: "1rem" }}
                    >
                      Contact
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="column">
              <div
                class="card"
                style={{ width: "340px", borderRadius: "10px" ,height:"25rem"}}
              >
                <div
                  style={{ display: "flex", padding: "1rem", height: "50%" }}
                >
                  <img
                    src="https://media.istockphoto.com/photos/code-programming-for-website-editors-view-picture-id1290492381?b=1&k=20&m=1290492381&s=170667a&w=0&h=NQSXJKhncCP1GLzDkD8KPZsCOh1wldDj5RZbPVJztxQ= "
                    style={{ width: "100%", borderRadius: "10px" }}
                    alt="Jane"
                  />
                </div>
                <div class="container">
                  <h2>Ashish Gupta</h2>
                  
            
                  <p class="title">Full stack dev</p>
                  <p class="title">
                    <button
                      class="button"
                      style={{ borderRadius: "1rem", marginTop: "1rem" }}
                    >
                      Contact
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="column">
              <div
                class="card"
                style={{ width: "340px", borderRadius: "10px" ,height:"25rem"}}
              >
                <div
                  style={{ display: "flex", padding: "1rem", height: "50%" }}
                >
                  <img
                    src="https://media.istockphoto.com/photos/code-programming-for-website-editors-view-picture-id1290492381?b=1&k=20&m=1290492381&s=170667a&w=0&h=NQSXJKhncCP1GLzDkD8KPZsCOh1wldDj5RZbPVJztxQ= "
                    style={{ width: "100%", borderRadius: "10px" }}
                    alt="Jane"
                  />
                </div>
                <div class="container">
                  <h2 style={{fontSize:"19px"}}>Abhishek Kishore</h2>
                  
            
                  <p class="title">Blockchain Developer</p>
                  <p class="title">
                    <button
                      class="button"
                      style={{ borderRadius: "1rem", marginTop: "1rem" }}
                    >
                      Contact
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="column">
              <div
                class="card"
                style={{ width: "340px", borderRadius: "10px" ,height:"25rem"}}
              >
                <div
                  style={{ display: "flex", padding: "1rem", height: "50%" }}
                >
                  <img
                    src="https://media.istockphoto.com/photos/code-programming-for-website-editors-view-picture-id1290492381?b=1&k=20&m=1290492381&s=170667a&w=0&h=NQSXJKhncCP1GLzDkD8KPZsCOh1wldDj5RZbPVJztxQ= "
                    style={{ width: "100%", borderRadius: "10px" }}
                    alt="Jane"
                  />
                </div>
                <div class="container">
                  <h2 style={{fontSize:"17px"}}>Deepanshu Gupta (TR)</h2>
                  
            
                  <p class="title">Product</p>
                  <p class="title">
                    <button
                      class="button"
                      style={{ borderRadius: "1rem", marginTop: "1rem" }}
                    >
                      Contact
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="column">
              <div
                class="card"
                style={{ width: "340px", borderRadius: "10px" ,height:"25rem"}}
              >
                <div
                  style={{ display: "flex", padding: "1rem", height: "50%" }}
                >
                  <img
                    src="https://media.istockphoto.com/photos/code-programming-for-website-editors-view-picture-id1290492381?b=1&k=20&m=1290492381&s=170667a&w=0&h=NQSXJKhncCP1GLzDkD8KPZsCOh1wldDj5RZbPVJztxQ= "
                    style={{ width: "100%", borderRadius: "10px" }}
                    alt="Jane"
                  />
                </div>
                <div class="container">
                  <h2>Kartik Bala</h2>
                  
            
                  <p class="title">Blockchain & Architecture</p>
                  <p class="title">
                    <button
                      class="button"
                      style={{ borderRadius: "1rem", marginTop: "1rem" }}
                    >
                      Contact
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="column">
              <div
                class="card"
                style={{ width: "340px", borderRadius: "10px" ,height:"25rem"}}
              >
                <div
                  style={{ display: "flex", padding: "1rem", height: "50%" }}
                >
                  <img
                    src="https://media.istockphoto.com/photos/code-programming-for-website-editors-view-picture-id1290492381?b=1&k=20&m=1290492381&s=170667a&w=0&h=NQSXJKhncCP1GLzDkD8KPZsCOh1wldDj5RZbPVJztxQ= "
                    style={{ width: "100%", borderRadius: "10px" }}
                    alt="Jane"
                  />
                </div>
                <div class="container">
                  <h2 style={{fontSize:"19px"}}>Dheeraj Kollipara</h2>
                  
            
                  <p class="title">Product & UX NET ARTIST</p>
                  <p class="title">
                    <button
                      class="button"
                      style={{ borderRadius: "1rem", marginTop: "1rem" }}
                    >
                      Contact
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="column">
              <div
                class="card"
                style={{ width: "340px", borderRadius: "10px" ,height:"25rem"}}
              >
                <div
                  style={{ display: "flex", padding: "1rem", height: "50%" }}
                >
                  <img
                    src="https://media.istockphoto.com/photos/code-programming-for-website-editors-view-picture-id1290492381?b=1&k=20&m=1290492381&s=170667a&w=0&h=NQSXJKhncCP1GLzDkD8KPZsCOh1wldDj5RZbPVJztxQ= "
                    style={{ width: "100%", borderRadius: "10px" }}
                    alt="Jane"
                  />
                </div>
                <div class="container">
                  <h2>Samarpan Dutta</h2>
                  
            
                  <p class="title">Blockchain Developer</p>
                  <p class="title">
                    <button
                      class="button"
                      style={{ borderRadius: "1rem", marginTop: "1rem" }}
                    >
                      Contact
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="column">
              <div
                class="card"
                style={{ width: "340px", borderRadius: "10px" ,height:"25rem"}}
              >
                <div
                  style={{ display: "flex", padding: "1rem", height: "50%" }}
                >
                  <img
                    src="https://media.istockphoto.com/photos/code-programming-for-website-editors-view-picture-id1290492381?b=1&k=20&m=1290492381&s=170667a&w=0&h=NQSXJKhncCP1GLzDkD8KPZsCOh1wldDj5RZbPVJztxQ= "
                    style={{ width: "100%", borderRadius: "10px" }}
                    alt="Jane"
                  />
                </div>
                <div class="container">
                  <h2>Niket Kumar</h2>
                  
            
                  <p class="title">Product</p>
                  <p class="title">
                    <button
                      class="button"
                      style={{ borderRadius: "1rem", marginTop: "1rem" }}
                    >
                      Contact
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="column">
              <div
                class="card"
                style={{ width: "340px", borderRadius: "10px" ,height:"25rem"}}
              >
                <div
                  style={{ display: "flex", padding: "1rem", height: "50%" }}
                >
                  <img
                    src="https://media.istockphoto.com/photos/code-programming-for-website-editors-view-picture-id1290492381?b=1&k=20&m=1290492381&s=170667a&w=0&h=NQSXJKhncCP1GLzDkD8KPZsCOh1wldDj5RZbPVJztxQ= "
                    style={{ width: "100%", borderRadius: "10px" }}
                    alt="Jane"
                  />
                </div>
                <div class="container">
                  <h2 style={{fontSize:"14px"}}>Kapil Bombarekar (PhD)</h2>
                  
            
                  <p class="title">NET Research & Artist Community</p>
                  <p class="title">
                    <button
                      class="button"
                      style={{ borderRadius: "1rem", marginTop: "1rem" }}
                    >
                      Contact
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="column">
              <div
                class="card"
                style={{ width: "340px", borderRadius: "10px" ,height:"25rem"}}
              >
                <div
                  style={{ display: "flex", padding: "1rem", height: "50%" }}
                >
                  <img
                    src="https://media.istockphoto.com/photos/code-programming-for-website-editors-view-picture-id1290492381?b=1&k=20&m=1290492381&s=170667a&w=0&h=NQSXJKhncCP1GLzDkD8KPZsCOh1wldDj5RZbPVJztxQ= "
                    style={{ width: "100%", borderRadius: "10px" }}
                    alt="Jane"
                  />
                </div>
                <div class="container">
                  <h2>Khizar Hussain</h2>
                  
            
                  <p class="title">Content & Community</p>
                  <p class="title">
                    <button
                      class="button"
                      style={{ borderRadius: "1rem", marginTop: "1rem" }}
                    >
                      Contact
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="column">
              <div
                class="card"
                style={{ width: "340px", borderRadius: "10px" ,height:"25rem"}}
              >
                <div
                  style={{ display: "flex", padding: "1rem", height: "50%" }}
                >
                  <img
                    src="https://media.istockphoto.com/photos/code-programming-for-website-editors-view-picture-id1290492381?b=1&k=20&m=1290492381&s=170667a&w=0&h=NQSXJKhncCP1GLzDkD8KPZsCOh1wldDj5RZbPVJztxQ= "
                    style={{ width: "100%", borderRadius: "10px" }}
                    alt="Jane"
                  />
                </div>
                <div class="container">
                  <h2>Cephas</h2>
                  
            
                  <p class="title">Security</p>
                  <p class="title">
                    <button
                      class="button"
                      style={{ borderRadius: "1rem", marginTop: "1rem" }}
                    >
                      Contact
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="column">
              <div
                class="card"
                style={{ width: "340px", borderRadius: "10px" ,height:"25rem"}}
              >
                <div
                  style={{ display: "flex", padding: "1rem", height: "50%" }}
                >
                  <img
                    src="https://media.istockphoto.com/photos/code-programming-for-website-editors-view-picture-id1290492381?b=1&k=20&m=1290492381&s=170667a&w=0&h=NQSXJKhncCP1GLzDkD8KPZsCOh1wldDj5RZbPVJztxQ= "
                    style={{ width: "100%", borderRadius: "10px" }}
                    alt="Jane"
                  />
                </div>
                <div class="container">
                  <h2 style={{fontSize:"22px"}}>Yashish Khurana</h2>
                  
            
                  <p class="title">Product & Crypto Strategy</p>
                  <p class="title">
                    <button
                      class="button"
                      style={{ borderRadius: "1rem", marginTop: "1rem" }}
                    >
                      Contact
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </div>

          
        </div>
      </div>

    </div>
  );
}

export default TeamPageFinal;
