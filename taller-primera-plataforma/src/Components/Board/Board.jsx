import React from 'react';
import MemoBlock from '../MemoBlock/MemoBlock';

const Board = ({animating, handleMemoClick, memoBlocks}) => {
    return (
        <div className="board">
            {memoBlocks.map( (memoBlock, i) => {
                return <MemoBlock key={`${i}_${memoBlock.emoji}`} animating={animating} handleMemoClick={handleMemoClick} memoBlock={memoBlock} />
            })}
        </div>
    );
}

export default Board;
