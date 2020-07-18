import React, { useState } from "react";

import "./Services.css";

const Services = () => {
  const [servicesState] = useState([
    {
      id: "s1",
      img: "hdff",
      heading: "Human Development Forum Foundation",
      paragraphs: [
        {
          id: "p1",
          sp: true,
          content:
            "Debbie Thompson a senior nurse of many years, has worked in the UK, Middle East and Australia. With a background in Surgery, Burns, Ophthalmology and School Nursing, she has been delivering First Aid Courses here in Thailand for the past 8 years.",
        },
        {
          id: "p2",
          content:
            "First Aid & CPR Training gives you skills not only to deal with Sudden Cardiac Arrest but also enables you to make a difference if someone is injured or sick. You might not always be able to save a life, but being able and prepared to help someone in need is a asset not only to yourself but also friends, family, collegues and anyone you may meet.",
        },
      ],
    },
    {
      id: "s2",
      img: "shrewsb",
      heading: "Shrewsbury International School, Bangkok",
      paragraphs: [
        {
          id: "p1",
          content:
            "We have chosen Debbie for our First Aid training for the last three years running now, and have been extremely pleased with how thorough and well thought out each one day training course has been. Debbie has a natural rapport with the Year 10 students taking the courses, and the training has been competent and well geared to the age group. Debbie makes it fun but also very educational. I would not hesitate to recommend her.",
        },
        {
          id: "p2",
          sp: true,
          content:
            "Gillian Storey, Teacher of Chemistry and EcoTeam Coordinator",
        },
        {
          id: "p3",
          content: "Shrewsbury International School Bangkok",
        },
      ],
    },
    {
      id: "s3",
      img: "andrew",
      heading: "Shrewsbury International School, Bangkok",
      paragraphs: [
        {
          id: "p1",
          content:
            "Debbie Thompson has been working with St Andrews since 2013 when we first approached her to provide some Whole School Staff Training on First Aid.",
        },
        {
          id: "p2",
          content:
            "The response from the staff was so positive that we organised more in depth training for selected staff and a rolling programme of this training has been in place since.",
        },
        {
          id: "p3",
          content:
            "Now a growing number of our staff have internationally recognised First Aid qualifications and we are keen to work with Debbie again during the next school year.",
        },
        {
          id: "p4",
          content:
            "Debbie has also run a variety of courses for our students - both Primary and Secondary, giving students the basic skills and confidence to deal with a variety of situations.  She develops a great rapport with students of any age and we would wholeheartedly recommend the progrmmes she provides.",
        },
        {
          id: "p5",
          sp: true,
          content: "Diane Field | Head of Foundation Stage and KS1St.",
        },
        {
          id: "p6",
          content: "Andrews International School Bangkok",
        },
      ],
    },
  ]);

  return (
    <div className="Services">
      {servicesState.map((service) => {
        return (
          <div className="Service" key={service.id}>
            <div className="Heading">{service.heading}</div>
            <div className="Content">
              <div className="container">
                <div className="row">
                  <div className="col-md-3">
                    <img src={require(`./${service.img}.jpg`)} alt="service" />
                  </div>
                  <div className="col-md">
                    {service.paragraphs.map((paragraph) => {
                      return (
                        <p
                          key={paragraph.id}
                          className={paragraph.sp ? "sp" : ""}
                        >
                          {paragraph.content}
                        </p>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Services;
