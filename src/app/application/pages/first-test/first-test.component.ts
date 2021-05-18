import { Component, OnInit } from '@angular/core';
import { BaseApiService } from 'src/app/services/base-api.service';

@Component({
  selector: 'app-first-test',
  templateUrl: './first-test.component.html',
  styleUrls: ['./first-test.component.css']
})
export class FirstTestComponent implements OnInit {

  public listUser: any = []

  id: any
  email: any
  password: any
  username: any
  firstname: any
  lastname: any

  checkAction: any

  constructor(private api: BaseApiService) { }

  ngOnInit(): void {
    this.loadUser()
  }

  loadUser() {
    this.checkAction = 'add'
    this.api.getData('user/get-all')
      .subscribe((res: any) => {
        this.listUser = res.data
      })
  }

  addUser() {
    const body = {
      email: this.email,
      password: this.password,
      username: this.username,
      firstname: this.firstname,
      lastname: this.lastname
    }
    this.api.postData('user/add', body)
      .subscribe((res: any) => {
        if (res) {
          this.loadUser()
          this.resetFields()
        }
      })
  }

  showUser(user: any) {
    this.checkAction = 'edit'
    this.id = user?.id
    this.email = user?.email
    this.username = user?.username
    this.firstname = user?.firstname
    this.lastname = user?.lastname
  }

  editUser() {
    const body = {
      email: this.email,
      password: this.password,
      username: this.username,
      firstname: this.firstname,
      lastname: this.lastname
    }
    this.api.putData('user/' + this.id, body)
      .subscribe((res: any) => {
        if (res) this.loadUser()
      })
  }

  resetFields() {
    this.email = this.password = this.firstname = this.lastname = this.username = ''
  }

}
