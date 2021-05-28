import styled from 'styled-components'
import {
  Paragraph,
  Container,
  Column,
  Title,
  Link,
} from '../components/Components'

const Contact = ({ styles, mobile }) => {
  return (
    <>
      <Container
        padding={styles.paddings.p1}
        style={{
          gridGap: !mobile ? '150px' : '80px',
          flexDirection: mobile && 'column',
        }}>
        <Column style={{ flex: 1 }}>
          <Paragraph
            color={styles.palette.blacks.b1}
            size={styles.paragraphs.p1}>
            For all inqueries about me, you can contact me by email, phone
            number or with social networks.
          </Paragraph>
        </Column>
        <Column style={{ flex: 3 }}>
          <Title
            size={styles.titles.t2}
            stroked
            color={styles.palette.blacks.b1}>
            Contact me
          </Title>
          <Way border={styles.palette.grays.g2}>
            <Title
              size={styles.titles.t3}
              color={styles.palette.blacks.b1}
              style={{
                wordBreak: 'break-all',
              }}>
              bdauphouy[at]gmail.com
            </Title>
            <Paragraph
              color={styles.palette.grays.g1}
              size={styles.paragraphs.p1}
              style={{ marginTop: '10px' }}>
              Do not hesitate to contact me for any information about me or my
              work.
            </Paragraph>
          </Way>
          <Way border={styles.palette.grays.g2}>
            <Title size={styles.titles.t3} color={styles.palette.blacks.b1}>
              +33621629748
            </Title>
            <Paragraph
              color={styles.palette.grays.g1}
              size={styles.paragraphs.p1}
              style={{ marginTop: '10px' }}>
              If you prefer ton ear my voice, you can call me.
            </Paragraph>
          </Way>
          <List>
            <li>
              <Link
                href="/"
                color={styles.palette.greens.g5}
                size={styles.links.l1}>
                twitter
              </Link>
            </li>
            <li>
              <Link
                href="/"
                color={styles.palette.greens.g5}
                size={styles.links.l1}>
                discord
              </Link>
            </li>
            <li>
              <Link
                href="/"
                color={styles.palette.greens.g5}
                size={styles.links.l1}>
                github
              </Link>
            </li>
          </List>
          <Paragraph
            color={styles.palette.grays.g1}
            size={styles.paragraphs.p1}
            style={{
              marginTop: '80px',
              alignSelf: mobile && 'center',
            }}>
            © 2021 - Baptiste Dauphouy
          </Paragraph>
        </Column>
      </Container>
    </>
  )
}

const Way = styled.div`
  border-bottom: solid 2px ${props => props.border};
  padding-bottom: 30px;
  margin-top: 50px;
  width: 100%;
`

const List = styled.ul`
  display: flex;
  margin-top: 80px;
  list-style: none;
  justify-content: space-between;
  width: 100%;
`

export default Contact
