<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  

  <script>
    // Objext Spread Operator

    const yaejin = {
      field : 'Frontend',
      language : 'JS'
    };
    const developer = {
      nation : 'Korea',
      ...yaejin //속성들을 다 들고옴.
    };
    console.log(developer);



  </script>
</body>
</html>