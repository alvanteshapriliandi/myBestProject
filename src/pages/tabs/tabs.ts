import { Component } from '@angular/core';

// import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { ChatPage } from '../chat/chat';
import { OrderPage } from '../order/order';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = OrderPage;
  tab3Root = ContactPage;
  tab4Root = ChatPage;

  constructor() {

  }
}
