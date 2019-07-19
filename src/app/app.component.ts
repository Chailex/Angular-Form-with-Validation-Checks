import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tdfForm';
  topics = ['1 Year Crash Course', '6 Month Capsule Course', '2 Year Complete Course'];
  topicHasError = true;


  userModel = new User('John Doe', 'abcd@gmail.com', '1212121212','abcd','abcd','abcd','7810xx', 'default', 'morning', true);

  validateTopic(value){
    if(value === "default"){
      this.topicHasError = true;
    }else{
      this. topicHasError = false
    }

  }

  onSubmit(){
    console.log(this.userModel)
  }
}
