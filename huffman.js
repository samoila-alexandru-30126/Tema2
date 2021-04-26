var treeData = {
  name: "A0 = 30",
  children: [
    {
      name: "Level 1: 18",
      children: [
        {
          name: "Level 2: 8",
          children: [
            {
              name: "Level 3: 4",
              children: [
                {
                  name: "Level 4: 2",
                  children: [{ name: "Level 5: B" }, { name: "Level 5: ." }],
                },
                { name: "Level 4: N" },
              ],
            },
            {
              name: "Level 3: 4",
              children: [{ name: "Level 4: I" }, { name: "Level 4: A" }],
            },
          ],
        },
        {
          name: "Level 2: 10",
          children: [{ name: "Level 3: T" }, { name: "Level 3: E" }],
        },
      ],
    },
    {
      name: "Level 1: 12",
      children: [
        {
          name: "Level 2: 7",
          children: [
            {
              name: "Level 3: 4",
              children: [
                {
                  name: "Level 4: 2",
                  children: [{ name: "Level 5: V" }, { name: "Level 5: S" }],
                },
                {
                  name: "Level 4: 2",
                  children: [{ name: "Level 5: L" }, { name: "Level 5: H" }],
                },
              ],
            },
            { name: "Level 3: R" },
          ],
        },
        { name: "Level 2: spatiu" },
      ],
    },
  ],
};
var word ="";
function sendHuffman()
{
    word=document.getElementById("Word").value;
    
    var nr=word.length;
    var i,k=0;
    var aux ="";
    var alpha=[];
    
    for(i=0;i<nr;i++)
    {
      if(aux.includes(word[i])==false)
      {
        aux=aux.concat(word[i]);
       
      }
    }
    var j;
    for(i=0;i<aux.length;i++)
    {
      alpha[i]=0;
      for(j=0;j<nr;j++)
      {if(aux[i].includes(word[j]))
      {
        alpha[i]++;
       
      }}
    }
    var a,b;
    for(i=0;i<alpha.length;i++)
    {
      for(j=0;j<alpha.length;j++)
      {
        if(alpha[i]>alpha[j])
        {
          a=alpha[i];
          b=alpha[j];
          alpha[i]=b;
          alpha[j]=a;
        }
      }
    }
    console.log(alpha);
    
  

}