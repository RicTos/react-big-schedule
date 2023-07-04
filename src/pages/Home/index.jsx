import { Typography, Button } from 'antd';
import './index.css';
import { useNavigate } from 'react-router-dom';

const { Title, Paragraph } = Typography;

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="home-page">
      <header>
        <Title level={1}>React Big Schedule</Title>
        <Paragraph>
          React Big Schedule is a powerful and intuitive scheduler and resource planning solution built with React. Seamlessly integrate this modern, browser-compatible component
          into your applications to effectively manage time, appointments, and resources. With drag-and-drop functionality, interactive UI, and granular views, React Big Schedule
          empowers you to effortlessly schedule and allocate resources with precision.
        </Paragraph>
        <Button type="link" size="large"  onClick={() => navigate('/basic')}>
          Get Started
        </Button>
      </header>

      {/* <section>
        <Title level={2}>Installation</Title>
        <Paragraph>To install React Big Schedule, use npm:</Paragraph>
        <pre>
          <code>npm install react-big-schedule</code>
        </pre>
      </section>

      <section>
        <Title level={2}>Tech Stack</Title>
        <ul>
          <li>React</li>
          <li>Ant Design</li>
          <li>react-dnd</li>
          <li>react-dnd-html5-backend</li>
          <li>webpack</li>
          <li>dayjs</li>
        </ul>
      </section>

      <section>
        <Title level={2}>Features</Title>
        <ul>
          <li>Modern and intuitive scheduler component for React applications.</li>
          <li>Seamless integration with React projects.</li>
          <li>Drag-and-drop functionality for effortless scheduling.</li>
          <li>Interactive user interface for a smooth user experience.</li>
          <li>Granular views to manage time, appointments, and resources effectively.</li>
          <li>Optimized for time management and calendar-based operations.</li>
          <li>Perfect for applications requiring advanced scheduling capabilities.</li>
        </ul>
      </section>

      <section>
        <Title level={2}>Contributions</Title>
        <Paragraph>Contributions to React Big Schedule are welcome! If you find a bug or want to contribute to the project, please follow these steps:</Paragraph>
        <ol>
          <li>
            Fork the repository on <a href="https://github.com/ansulagrawal/react-big-schedule">GitHub</a>.
          </li>
          <li>Create a new branch with a descriptive name.</li>
          <li>Make your changes and commit them with clear messages.</li>
          <li>Push your changes to your forked repository.</li>
          <li>Submit a pull request to the master repository.</li>
        </ol>
        <Paragraph>Please ensure that your code adheres to the project&#39;s coding conventions and includes appropriate tests.</Paragraph>
      </section>

      <section>
        <Title level={2}>License</Title>
        <Paragraph>
          React Big Schedule is released under the MIT License. See the <a href="https://github.com/ansulagrawal/react-big-schedule/blob/master/LICENSE">LICENSE</a> file for more
          details.
        </Paragraph>
      </section>

      <section>
        <Title level={2}>Support</Title>
        <Paragraph>
          If you have any questions or need support, please create an issue in the <a href="https://github.com/ansulagrawal/react-big-schedule/issues">GitHub repository</a>.
        </Paragraph>
      </section>

      <section>
        <Title level={2}>Credits</Title>
        <Paragraph>
          React Big Schedule is developed and maintained by the React Big Schedule team. We would like to thank the open-source community for their valuable contributions and
          feedback.
        </Paragraph>
        <Paragraph>Special thanks to the following contributors:</Paragraph>
        <ul>
          <li>
            Ansul Agrawal (<a href="https://github.com/ansulagrawal">@ansulagrawal</a>)
          </li>
          <li>
            Jitendra Soni (<a href="https://github.com/JitendraSoni1234">@JitendraSoni1234</a>)
          </li>
        </ul>
      </section>

      <section>
        <Title level={2}>Acknowledgments</Title>
        <Paragraph>
          We would like to acknowledge the <a href="https://stephenchou1017.github.io/scheduler/#/">React Big Scheduler</a> project for their inspiration and contributions.
        </Paragraph>
      </section>

      <section>
        <Title level={2}>Roadmap</Title>
        <ul>
          <li>Additional view options for different scheduling needs.</li>
          <li>Support for recurring appointments.</li>
          <li>Integration with popular calendar services.</li>
          <li>Improved accessibility and localization support.</li>
          <li>Performance optimizations for handling large data sets.</li>
        </ul>
        <Paragraph>We are continuously working on enhancing React Big Schedule and welcome your feedback and suggestions for future improvements.</Paragraph>
      </section>

      <section>
        <Title level={2}>Changelog</Title>
        <Paragraph>
          Please refer to the <a href="https://github.com/ansulagrawal/react-big-schedule/blob/master/CHANGELOG.md">CHANGELOG.md</a> file.
        </Paragraph>
      </section> */}
    </div>
  );
};

export default Home;
