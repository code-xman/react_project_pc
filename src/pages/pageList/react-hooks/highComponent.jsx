const SayComponent = ({ name, greeting }) => {
  return (
    <h1>
      {greeting}! {name}.
    </h1>
  );
};

const HighComponent = (WrappedComponent) => {
  return (props) => {
    return (
      <div>
        <WrappedComponent
          {...props}
          name={props.name || 'Alice'}
          greeting={props.greeting || 'Hi'}
        />
      </div>
    );
  };
};

export const SayHi = HighComponent(SayComponent);

const Content = () => {
  return (
    <div>
      <SayHi />
      <SayHi greeting={'hello'} name={'Tom'} />
      <SayHi greeting={'你好'} name={'李华'} />
      <SayHi greeting={'Hallo'} name={'Felix'} />
    </div>
  );
};

export default Content;
