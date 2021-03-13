module.exports = ({ name,
    about,
    dob,
    email,
    phoneNumber,
    eduSchool,
    edu12Year,
    eduQualSchool,
    eduDescSch,
    eduCollege,
    eduGradYear,
    eduQualCollg,
    eduDescCllg,
    project1Name,
    project1Link,
    project1About,
    project2Name,
    project2Link,
    project2About,
    experience1Company,
    experience1Post,
    experience1Duration,
    experience1desc,
  
    experience2Company,
    experience2Post,
    experience2Duration,
    experience2desc,
    profileLinkedIn,
    profileGithub,
    profilePortFolio,
    profileDevfolio,
  
    }) => {
      return `
        <!doctype html>
        <html>
            <head>
                <!-- Font Awesome -->
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css">
                <!-- google fonts -->
                <link rel="preconnect" href="https://fonts.gstatic.com">
                <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap" rel="stylesheet">
    
                <style>
                
                    * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                    list-style: none;
                    font-family: 'Roboto', sans-serif;
                    }
                    body {
                  
                    background:#3d4043;
                    font-size: 15px;
                    /*line-height: 22px;*/
                    font-weight: 300;
                    
                    }
                    .name-bold{
                    font-weight: 500;
                    font-size: 24px;
                    text-transform: uppercase;
                    color:white;
                    margin-bottom:8px;
                    }
                    .bold {
                    font-weight: 400;
                    font-size: 20px;
                    text-transform: uppercase;
                    }
                    .semi-bold {
                    font-size: 17px;
                    font-weight: 300;
  
                    }
                    .mydesig{
                      color:white;
                    }
                    .mylink2{
                      color:black;
                    }
                    .resume {
                    width: 100%;
                    height: auto;
                    display: flex;
                    margin: 0px 0px 0px 0px;
                    }
                    .resume .resume_left {
                    width: 33%;
                    /*   background: #0bb5f4; */
                    /*   background:black; */
                    background:#3d4043;
                    float:left;
                    height:auto;
                    border-bottom: 4px solid #3d4043;
  
                    }
                    .resume .resume_left .resume_profile {
                    width: 100%;
                    height: 200px;
                    }
                    /* .resume .resume_left .resume_profile img {
                    width: 100%;
                    height: 100%;
                    } */
                    .resume .resume_left .resume_content {
                    padding: 0 25px;
                    }
                    .resume .title {
                    margin-bottom: 20px;
                    }
                    .resume .resume_left .bold {
                    color: #fff;
                    }
                    .resume .resume_left .regular {
                    /*   color: #b1eaff; */
                    color:white;
                    }
                    .resume .resume_item {
                    padding: 25px 0;
                    border-bottom: 2px solid white;
                    }
                    .resume .resume_left .resume_item:last-child,
                    .resume .resume_right .resume_item:last-child {
                     /* border-bottom: 0px; */
                    }
                    .resume .resume_left ul li {
                    display: flex;
                    margin-bottom: 10px;
                    justify-content: space-between;
  
                    }
                    .resume .resume_left ul li:last-child {
                    margin-bottom: 0;
                    }
                    .resume .resume_left ul li .icon {
                    width: 40px;
                    height: 40px;
                    background: #fff;
                    /*   color: #0bb5f4; */
                    color:black;
                    border-radius: 50%;
                    margin-right: 10px;
                    font-size: 16px;
                    position: relative;
                    
                    }
                    .resume .icon i,
                    .resume .resume_right .resume_hobby ul li i {
                    position:absolute;
                    top:27%;
                    left:27%;
                    transform: translate(-50%, -50%);
                    }
                    .resume .resume_left ul li .data {
                    /*   color: #b1eaff; */
                    color:white;
                    
                   
                    }
                    .resume .resume_left .resume_skills ul li {
                    display: flex;
                    margin-bottom: 10px;
                    /*   color: #b1eaff; */
                    color:white;
                    justify-content: space-between;
                    
                    }
                    .resume .resume_left .resume_skills ul li .skill_name {
                    
                    }
                    .resume .resume_left .resume_skills ul li .skill_progress {
                    width: 60%;
                    margin: 0 5px;
                    height: 5px;
                    /*   background: #009fd9; */
                    color:white;
                    position: relative;
                    }
                    .resume .resume_left .resume_skills ul li .skill_per {
                    width: 15%;
                    }
                    .resume .resume_left .resume_skills ul li .skill_progress span {
                    position: absolute;
                    top: 0;
                    left: 0;
                    height: 100%;
                    background: #fff;
                    }
                    .mylink{
                    text-decoration:none;
                    }
                    .resume .resume_left .resume_social .semi-bold {
                    color: #fff;
                    margin-bottom: 3px;
                    }
  
  
  
                    .resume .resume_right {
                    width: 67%;
                    background: #fff;
                    padding: 25px;
                    float:left;
                    border-bottom: 4px solid #3d4043;
  
                    }
                    .resume .resume_right .bold {
                    /*   color: #0bb5f4; */
                    color:black;
                    }
                    .resume .resume_right .resume_work ul,
                    .resume .resume_right .resume_education ul {
                    padding-left: 40px;
                    overflow: hidden;
                    }
                    .resume .resume_right ul li {
                    position: relative;
                    }
                    .resume .resume_right ul li .date {
                    font-size: 16px;
                    margin-bottom: 12px;
  
                    }
                    .resume .resume_right ul li .info {
                    margin-bottom: 20px;
                    }
                    .resume .resume_right ul li:last-child .info {
                    margin-bottom: 0;
                    }
                    .resume .resume_right .resume_work ul li:before,
                    .resume .resume_right .resume_education ul li:before {
                    content: "";
                    position: absolute;
                    top: 5px;
                    left: -25px;
                    width: 6px;
                    height: 6px;
                    border-radius: 50%;
                    border: 2px solid black;
                    }
                    .resume .resume_right .resume_work ul li:after,
                    .resume .resume_right .resume_education ul li:after {
                    content: "";
                    position: absolute;
                    top: 14px;
                    left: -21px;
                    width: 2px;
                    height: 115px;
                    background: black;
                    }
                    .resume .resume_right .resume_hobby ul {
                    display: flex;
                    justify-content: space-between;
                    }
                    .resume .resume_right .resume_hobby ul li {
                    width: 80px;
                    height: 80px;
                    border: 2px solid black;
                    border-radius: 50%;
                    position: relative;
                    color: black;
                    }
                    .resume .resume_right .resume_hobby ul li i {
                    font-size: 30px;
                    }
                    .resume .resume_right .resume_hobby ul li:before {
                    content: "";
                    position: absolute;
                    top: 40px;
                    right: -52px;
                    width: 50px;
                    height: 2px;
                    background: black;
                    }
                    .resume .resume_right .resume_hobby ul li:last-child:before {
                    display: none;
                    }
                </style>
                        
            </head>
            <body>
            <div class="resume">
            <div class="resume_left">
         
              <br>
              <div class="resume_content">
                <div class="resume_item resume_info">
                  <div class="title">
                    <p class="name-bold">${name}</p>
                    <p class="semi-bold mydesig">Designer</p>
                  </div>
                  <br>
                  <br>
                  <br>
                  <ul>
                    <li>
                    
                      <div class="data semi-bold">9605498564
                        ${phoneNumber}
                      </div>
                    </li>
                    <li>
          
                       <a href="${email}" class="data mylink semi-bold">${email}</a>
                    </li>
                    
                  </ul>
                </div>
                <div class="resume_item resume_skills">
                  <div class="title">
                    <p class="bold">skills</p>
                  </div>
                  <ul>
                    <li>
                      <div class="skill_name">
                        HTML
                      </div>
         <!--              <div class="skill_progress">
                        <span style="width: 80%;"></span>
                      </div>
                      <div class="skill_per">80%</div> -->
                    </li>
                    <li>
                      <div class="skill_name">
                        CSS
                      </div>
         
                    </li>
                    <li>
                      <div class="skill_name">
                        SASS
                      </div>
         
                    </li>
                    <li>
                      <div class="skill_name">
                        JS
                      </div>
         
                    </li>
                    <li>
                      <div class="skill_name">
                        JQUERY
                      </div>
         
                    </li>
                  </ul>
                </div>
                <div class="resume_item resume_social">
                  <div class="title">
                    <p class="bold">profiles</p>
                  </div>
                  <ul>
                    <li>
                      
                      <div class="data">
                        <a href="${profileLinkedIn}" class="semi-bold mylink">LinkedIn</a>
                      </div>
                    </li>
                    <li>
                      
                      <div class="data">
                        <a href="${profileGithub}" class="semi-bold mylink">Github</a>
                      </div>
                    </li>
                    <li>
                      
                      <div class="data">
                        <a href="${profilePortFolio}" class="semi-bold mylink">Portfolio</a>
                      </div>
                    </li>
                    <li>
                      
                      <div class="data">
                        <a href="${profileDevfolio}" class="semi-bold mylink">Devfolio</a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
           </div>
        
  
  
  
           <div class="resume_right">
             <div class="resume_item resume_about">
                 <div class="title">
                    <p class="bold">About</p>
                  </div>
                 <p>${about}</p>
             </div>
             <div class="resume_item resume_work">
                 <div class="title">
                    <p class="bold">Work Experience</p>
                  </div>
                 <ul>
                    <li>
                        <div class="date">${experience1Duration}</div>
                        <div class="info">
                               <p class="semi-bold">${experience1Company} - ${experience1Post}</p> 
                            <p>${experience1desc}</p>
                          </div>
                      </li>
                      <li>
                      <div class="date">${experience2Duration}</div>
                      <div class="info">
                             <p class="semi-bold">${experience2Company} - ${experience2Post}</p> 
                          <p>${experience2desc}</p>
                        </div>
                      </li>
                 </ul>
             </div>
             <div class="resume_item resume_education">
               <div class="title">
                    <p class="bold">Education</p>
                  </div>
               <ul>
                     <li>
                     <div class="date">${eduGradYear}</div>
                     <div class="info">
                            <p class="semi-bold">${eduCollege} - ${eduQualCollg}</p> 
                         <p>${eduDescCllg}</p>
                       </div>
                     </li>
                     <li>
                     <div class="date">${edu12Year}</div>
                     <div class="info">
                            <p class="semi-bold">${eduSchool} - ${eduQualSchool}</p> 
                         <p>${eduDescSch}</p>
                       </div>
                     </li>
                 </ul>
             </div>
             <div class="resume_item resume_education">
               <div class="title">
                    <p class="bold">Projects</p>
                  </div>
               <ul>
                     <li>
                         <div class="date">${project1Name}</div> 
                         <div class="info">
                              <a href="${project1Link}" class="mylink mylink2" >${project1Link}</a> 
                           <p>${project1About}</p>
                         </div>
                     </li>
                     <li>
                     <div class="date">${project2Name}</div> 
                     <div class="info">
                          <a href="${project2Link}" class="mylink mylink2">${project2Link}</a> 
                       <p>${project2About}</p>
                     </div>
                     </li>
                 </ul>
             </div>
           </div>
         </div>
         
           
    
            </body>
        </html> 
      `;
    }