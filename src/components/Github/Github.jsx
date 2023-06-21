import React, { useEffect } from "react";
import GitHubCalendar from "react-github-calendar";
import AOS from "aos";
import './Github.css'

export const Github = () => {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <section data-aos="fade-up" data-aos-duration="2000">
      <h5 data-aos="fade-up" data-aos-duration="2000">My Github</h5>
      <h2 data-aos="fade-up" data-aos-duration="2000">My Contributions and Stats</h2>
      <div data-aos="fade-up" data-aos-duration="2000" className="git_calendar">

        <GitHubCalendar
          fontSize={16}
          blockSize={10}
          year={2023}
          username="VivekGhalout"
        />
      </div>
      <div id="top-langs" data-aos="zoom-in" data-aos-duration="2000">

        <img

          id="github-top-langs"
          align="center"
          src="https://github-readme-stats.vercel.app/api/top-langs/?username=VivekGhalout&layout=compact&bg_color=FFFFFF00&hide_border=true&text_color=6d6b6b&title_color=c3c3c3"
          alt="VivekGhalout"
        />
      </div>
      <div data-aos="fade-up" data-aos-duration="2000" id="github-stat" >
        <img
          data-aos="fade-right"
          data-aos-duration="2000"
          id="github-stats-card"
          align="center"
          src="https://github-readme-stats.vercel.app/api?username=VivekGhalout&theme=dark&hide_border=true&include_all_commits=true&count_private=true&bg_color=FFFFFF00&text_color=c3c3c3&title_color=c3c3c3"
          alt="VivekGhalout"
        />
        <img
          data-aos="fade-left"
          data-aos-duration="2000"
          id="github-streak-stats"
          align="center"
          src="https://github-readme-streak-stats.herokuapp.com/?user=VivekGhalout&theme=dark&hide_border=true&background=FFFFFF00&sideNums=c3c3c3&sideLabels=c3c3c3&ring=4db5ff&fire=4db5ff&currStreakLabel=4db5ff&currStreakNum=4db5ff"
          alt="VivekGhalout"
        />
      </div>
    </section>
  );
};
