import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Head.module.scss';
import { HPage } from './HPage/hPage';

interface Props {
    selecionado: number,
}

export const Head = ({selecionado}: Props) => {

    const pages = [
        {nome: 'Home', url: '/'},
        {nome: 'Produtos', url: '/produtos'},
    ]

    const history = useNavigate();

    return(
        <div className={styles.container}>
            <h1 className={styles.logo}>Cadastro de Produtos</h1>
            <div className={styles.menu}>
                {pages.map((page, index) => (
                    <HPage
                        key={index}
                        onClick={() => history(page.url)}
                        selected={index === selecionado}
                    >   
                        {page.nome}
                    </HPage>
                ))}
            </div>
        </div>
    )
}