import React from 'react';
import './App.css';
import { PageContainer, Header } from './components';
import { Card, Icon } from './ui';

const menus = ["Home", "Products", "Offers", "Checkout", "Contact"]

function App() {
  return (
    <PageContainer>
      <Header />

      <div className="grid grid-cols-12">
        <div className="col-span-4 px-5 py-3">
          <Card>
            <div className="font-semibold bg-lime-600 text-white p-4 rounded-t-md flex items-center">
              <Icon name="menu" />
              <div className="px-2">Menu</div>
            </div>

            <div>
              {menus.map((menu) => (
                <div key={menu} className="px-4 py-3 border-t flex items-center hover:bg-gray-100 transition">
                  <Icon name="home" />
                  <div className="flex-1 font-semibold px-2">{menu}</div>
                  <Icon name="arrow_forward" />
                </div>
              ))}
            </div>
          </Card>
        </div>
        <div className="col-span-8"></div>
      </div>
    </PageContainer>
  );
}

export default App;
