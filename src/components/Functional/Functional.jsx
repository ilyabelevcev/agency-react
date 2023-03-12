import React from 'react';
import { NavLink } from 'react-router-dom'

const Functional = () => {
    return (
        <div className='home__functional'>
            <h3 className='home__functional-heading'>
                <NavLink className='home__functional-link' to='/portfolio'>Portfolio</NavLink>
            </h3>
            <ul className='home__functional-list'>
                <li className='home__functional-item'>При нажатии на одну из категорий список работ фильтруется, по умолчанию выбранная категория - "Show All"</li>
                <li className='home__functional-item'>Если нажать на карточку работы, то она станет активной и у нее появится зеленая рамка. При повторном нажатии рамка исчезает, а карточка становится неактивной</li>
                <li className='home__functional-item'>Также внутри карточки находится категориия, к которой относится работа, если нажать на эту кнопку, то работы также отфильтруются</li>
                <li className='home__functional-item'>На странице портфолио отображены не все работы, при нажатии на кнопку "Load more" подгружаются остальные</li>
            </ul>
            <h3 className='home__functional-heading'>
                <NavLink className='home__functional-link' to='/blog'>Blog</NavLink>
            </h3>
            <ul className='home__functional-list'>
                <li className='home__functional-item'>На странице реализован поиск по постам, поиск идет по совпадению(по умолчанию includes, но через код можно поменять на startsWith) в тексте заголовка</li>
                <li className='home__functional-item'>Все посты разбиты на страницы, в приложении реализована пагинация, при нажатии на нужную страницу цифра, которая соответвтвует текущей странице приобретает затемненный background</li>
                <li className='home__functional-item'>Посты подгружаются с jsonplaceholder с помощью axios(используются параметры limit и page для корректной пагинации)</li>
                <li className='home__functional-item'>При нажатии на нужный пост, он становится активным и появляется кнопка "Delete", при повторном нажатии на контент внутри карточки поста(в том числе кнопка "Delete") - пост становится неактивным</li>
            </ul>
        </div>
    );
}

export default Functional;
