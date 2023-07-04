import { Col, Row } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { GithubOutlined } from '@ant-design/icons';
import logo from '/logo.png';
import npmLogo from '/npm.svg';

function Header() {
  const navigate = useNavigate();
  return (
    <Row align="middle" justify="space-between" className="header-wrapper">
      <Col span={2}>
        <img src={logo} alt="Logo" onClick={() => navigate('/')} className="logo_img" />
      </Col>
      <Col>
        <Link to="https://www.npmjs.com/package/react-big-schedule" target="_blank" className="npm-icon">
          <img src={npmLogo} alt="npm-logo" />
        </Link>
        <Link to="https://github.com/ansulagrawal/react-big-schedule" target="_blank" className="github-icon">
          <GithubOutlined />
        </Link>
      </Col>
    </Row>
  );
}

export default Header;
