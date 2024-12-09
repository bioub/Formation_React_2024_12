function Hello(props) {

  props.name = 'Toto';

  return (
    <div>
      Hello my name is {name}, I'm {age}, and my status is{' '}
      {active ? 'active' : 'inactive'}
    </div>
  );
}

export default Hello;
