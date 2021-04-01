import React, { useState } from "react";
import { Card, CardContent, CardActions } from "@material-ui/core";
import { AnimatedList } from "react-animated-list";
import { Button } from "@material-ui/core";


const TestCard=({ onDismiss, children })=> {
  return (
    <Card style={{ margin: "10px" }}>
      <CardContent>{children}</CardContent>
      <CardActions>
        <Button onClick={onDismiss} variant={"contained"}>
          Remove
        </Button>
      </CardActions>
    </Card>
  );
}

const List=()=> {
  const [cards, setCards] = useState([1, 2, 3]);
  const addItem = () => {
    setCards([...cards, new Date().getMilliseconds()]);
  };
  const onDismiss = (card, cards) => {
    const newCards = cards.filter(c => {
      return card !== c;
    });
    setCards(newCards);
  };
  return (
    <div className="App">
      <header className="App-header">
      
        <AnimatedList animation={"grow"}>
          {cards.map((c, i) => (
            <TestCard
              key={c}
              onDismiss={() => onDismiss(c, cards)}
              cards={cards}
            >
              {c}
            </TestCard>
          ))}
        </AnimatedList>
      </header>
    </div>
  );
}

export default List;