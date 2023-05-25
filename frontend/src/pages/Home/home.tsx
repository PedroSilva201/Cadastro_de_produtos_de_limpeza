import { Head, PainelBtn } from "../../shared/components";
import produtos from '../../shared/images/produtos.jpg';
import { useNavigate } from "react-router-dom";
import styles from './Home.module.scss';

export default function Home() {

  const history = useNavigate();

  return (
    <>
      <Head selecionado={0}/>
      <div className={styles.container}>
        <PainelBtn imagem={produtos} onClick={() => history('/produtos')}>
          Produtos
        </PainelBtn>
      </div>
    </>
  );
}