const useScript = () => {
  //kan man loopa content i filmappar med bara react?
  const gameFiles = [
    'definitions',
    'game',
    'beer',
    'calculatemood',
    'idle',
    'showstats',
    'sleep',
    'eat',
    'stretch',
    'code',
    'stackoverflow',
  ];
  for (let file of gameFiles) {
    console.log(file);
    let createFile = document.createElement('script');
    createFile.src = 'src/components/game/' + file + '.jsx';
    createFile.async = true;
    createFile.type = 'module';
    document.body.appendChild(createFile);
    console.log(file);
  }
};

export default useScript;
