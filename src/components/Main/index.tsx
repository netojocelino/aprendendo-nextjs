import * as S from './styles';

const Main = ({
  title = 'React com NextJS',
  description = 'Just another boilerplate'
}) => (
  <S.Wrapper>
    <S.Logo
      src={`/img/logo.svg`}
      alt={`Imagem de um átomo e texto React Avançado`}
    />
    <S.Title>{title}</S.Title>

    <S.Description>{description}</S.Description>

    <S.Illustration
      src={`/img/hero-illustration.svg`}
      alt={`Imagem de pessoa em frente de computador com três telas com código`}
    />
  </S.Wrapper>
);

export default Main;
