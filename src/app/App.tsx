import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          ФИО: Корогод Сергей Юрьевич
        </p>
        <p>
          Каких целей хочу достичь: Хочу структурировать и углубить знания в React JS. 
          Хочу понять и отработать на практике основные паттерны в разработке frontend-приложений.
          Очень надеюсь, что на курсе расскажут про новые фичи React 19.
        </p>
        <p>
          Какими технологиями владею: долгое время работал с Telegram API на языке python (библиотеки telethon, aiogram). 
          Владею JS (TS), React, Redux. На базовом уровне Express JS, Nest JS. 
          С недавнего времени использую Apache Kafka. 
          В 2024 году прошел курс "Dev Ops практики и инструменты" от Otus. После курса стал активно использовать Docker, 
          Имею базовые навыки использования Gitlab CI/CD, Ansible, Terraform, Helm, Kubernetes.
        </p>
        <p>
          О себе и своем опыте: являюсь fullstack-разработчиком в компании "Статус-Комплейнс". 
        </p>
      </header>
    </div>
  );
}

export default App;
