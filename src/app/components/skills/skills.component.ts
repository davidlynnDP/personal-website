import { Component } from '@angular/core';

interface Skills {
  src: string,
  alt: string,
  paragraph: string,
}

@Component({
  selector: 'skills-custom',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {

  public mainSkills: Skills[] = [
    { src: 'assets/skills-svgs/main/ts.svg' , alt: 'TypeScript icon' , paragraph: 'TypeScript' },
    { src: 'assets/skills-svgs/main/nest.svg' , alt: 'Nest icon' , paragraph: 'Nest' },
    { src: 'assets/skills-svgs/main/angular.svg' , alt: 'Angular icon' , paragraph: 'Angular' },
    { src: 'assets/skills-svgs/main/spring.svg' , alt: 'Spring icon' , paragraph: 'Spring' },
    { src: 'assets/skills-svgs/main/java.svg' , alt: 'Java icon' , paragraph: 'Java' },
    { src: 'assets/skills-svgs/main/mongodb.svg' , alt: 'MongoDB icon' , paragraph: 'MongoDB' },
    { src: 'assets/skills-svgs/main/mysql.svg' , alt: 'MySQL icon' , paragraph: 'MySQL' },
    { src: 'assets/skills-svgs/main/postgresql.svg' , alt: 'PostgreSQL icon' , paragraph: 'PostgreSQL' },
  ]

  public secondarySkills: Skills[] = [
    { src: 'assets/skills-svgs/seconds/rxjs.svg' , alt: 'ReactiveX icon' , paragraph: 'ReactiveX' },
    { src: 'assets/skills-svgs/seconds/react.svg' , alt: 'React icon' , paragraph: 'React' },
    { src: 'assets/skills-svgs/seconds/vue.svg' , alt: 'Vue icon' , paragraph: 'Vue' },
    { src: 'assets/skills-svgs/seconds/api.svg' , alt: 'Api icon' , paragraph: 'Api' },
    { src: 'assets/skills-svgs/seconds/sass.svg' , alt: 'Sass icon' , paragraph: 'Sass' },
    { src: 'assets/skills-svgs/seconds/jest.svg' , alt: 'Jest icon' , paragraph: 'Jest' },
    { src: 'assets/skills-svgs/seconds/tailwindcss.svg' , alt: 'Tailwind icon' , paragraph: 'Tailwind' },
    { src: 'assets/skills-svgs/seconds/hibernate.svg' , alt: 'Hibernate ORM icon' , paragraph: 'Hibernate ORM' },
  ]

  public additionalSkills: Skills[] = [
    { src: 'assets/skills-svgs/additional/nextjs.svg' , alt: 'Next.js icon' , paragraph: 'Next.js' },
    { src: 'assets/skills-svgs/additional/nuxtjs.svg' , alt: 'Nuxt.js icon' , paragraph: 'Nuxt.js' },
    { src: 'assets/skills-svgs/additional/angular-universal.svg' , alt: 'Angular Universal icon' , paragraph: 'Angular Universal' },
    { src: 'assets/skills-svgs/additional/git.svg' , alt: 'Git icon' , paragraph: 'Git' },
    { src: 'assets/skills-svgs/additional/github.svg' , alt: 'GitHub icon' , paragraph: 'GitHub' },
    { src: 'assets/skills-svgs/additional/postman.svg' , alt: 'Postman icon' , paragraph: 'Postman' },
    { src: 'assets/skills-svgs/additional/aws.svg' , alt: 'AWS icon' , paragraph: 'AWS' },
    { src: 'assets/skills-svgs/additional/azure.svg' , alt: 'Azure icon' , paragraph: 'Azure' },
  ]

}
