import { Suspense, lazy, useState } from 'react';
import { Typography, Row, Tabs } from 'antd';
import SourceCode from '../../components/SourceCode';
import Fallback from '../../components/Fallback';

const FunctionalComponent = lazy(() => import('./functional-based'));
const ClassBasedComponent = lazy(() => import('./class-based'));

function Basic() {
  const [type, setType] = useState('class-based');

  const items = [
    {
      key: 'functional-based',
      label: 'Function',
      children: (
        <Suspense fallback={<Fallback />}>
          <FunctionalComponent />
        </Suspense>
      ),
    },
    {
      key: 'class-based',
      label: 'Class',
      children: (
        <Suspense fallback={<Fallback />}>
          <ClassBasedComponent />
        </Suspense>
      ),
    },
  ];
  return (
    <>
      <Row align="middle" justify="center">
        <Typography.Title level={2}> Basic Example</Typography.Title>
      </Row>
      <SourceCode value={`https://github.com/ansulagrawal/react-big-schedule/blob/master/src/examples/Basic/${type}.jsx`} />
      <Tabs activeKey={type} items={items} onChange={setType} />
    </>
  );
}

export default Basic;
