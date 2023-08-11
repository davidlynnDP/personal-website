import { Component } from '@angular/core';

interface IProjectCards {
  title: string,
  description: string,
  tags: string[],
  urlGit: string,
  url: string,
}

@Component({
  selector: 'projects-custom',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {

  public projectCards: IProjectCards[] = [
    { title: 'Chat + Sockets', description: 'Chat en tiempo real', tags: ['Nestjs', 'Angular', 'FullStack', 'Git', 'GitHub'], urlGit: '#', url: '#' },
    { title: 'Calculadora Redux', description: 'Calculadora moderna', tags: ['Vue', 'Firebase', 'Frontend'], urlGit: '#', url: '#' },
    { title: 'Back Inventarios', description: 'Backend con autenticacion y base de datos relacional', tags: ['Java', 'Spring', 'Backend'], urlGit: '#', url: '#' },
    { title: 'Back Inventarios', description: 'Backend con autenticacion y base de datos relacional', tags: ['Java', 'Spring', 'Backend'], urlGit: '#', url: '#' }
  ]

}
