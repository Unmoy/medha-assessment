import React, { useEffect, useState } from "react";
import "./ProfileCard.css";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faGraduationCap,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";

const ProfileCard = () => {
  const [profileData, setProfileData] = useState({});
  const [experience, setExperience] = useState({});
  const [qualification, setQualificaiton] = useState({});

  const options = { year: "numeric", month: "short" };
  const opening = experience.company_starting_date;
  const closing = experience.company_ending_date;
  const endingDate = new Date(opening).toLocaleDateString([], options);
  const startingDate = new Date(closing).toLocaleDateString([], options);

  useEffect(() => {
    axios
      .post("https://api.meetworks.in/users/get_unique_jobseeker_profile", {
        jobseeker_id: "614b410c2c4b197356a37f18",
      })
      .then((data) => {
        setProfileData(data.data[0]);
        setExperience(data.data[0].user_experiences[2]);
        setQualificaiton(data.data[0].user_qualifications[0]);
      });
  }, []);

  return (
    <div className="profile_card_container">
      <Card sx={{ display: "flex" }}>
        <div className="profile_image">
          <CardMedia
            component="img"
            sx={{
              height: "500px",
              width: "370px",
              position: "absolute",
            }}
            image={profileData.user_image_url}
            alt="profile_image"
          />
        </div>
        <Box
          sx={{
            ml: 8,
            position: "relative",
            left: "40%",
          }}
        >
          <div className="card_header">
            <h6>{profileData.jobseeker_name}</h6>
            <div className="card_header_location">
              <p>
                <FontAwesomeIcon
                  icon={faMapMarkerAlt}
                  className="profile_content_icon"
                />
                {profileData.area}, {profileData.city}
              </p>
            </div>
          </div>
          <div className="profile_content_header">
            <p>
              <FontAwesomeIcon
                icon={faBriefcase}
                className="profile_content_icon"
              />
              Experience
            </p>
            <button>2 yrs Exp</button>
          </div>
          <div class="profile_content">
            <img src={experience.company_logo} alt="company_logo" />
            <div class="profile_content_wrapper">
              <h5>{experience.user_post}</h5>
              <span>{experience.company_name}</span>
              <small>
                {startingDate} - {endingDate}
              </small>
              <p>{experience.role_discription}</p>
            </div>
          </div>
          <div className="profile_content_header">
            <p>
              <FontAwesomeIcon
                icon={faGraduationCap}
                className="profile_content_icon"
              />
              Education
            </p>
          </div>
          <div className="educaiion_wrapper">
            <h5>
              {qualification.course_type} - {qualification.user_degree}
            </h5>
            <small>
              {qualification.user_college}| {qualification.user_passing_year}
            </small>
          </div>
        </Box>
      </Card>
    </div>
  );
};

export default ProfileCard;
