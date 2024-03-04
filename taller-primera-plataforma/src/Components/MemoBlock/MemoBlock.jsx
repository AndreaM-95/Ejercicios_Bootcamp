import React from 'react';
import './MemoBlocks.css';

const MemoBlock = ({animating, handleMemoClick, memoBlock}) => (
    <div className="memo-block" onClick={() => (!memoBlock.flipped && !animating) && handleMemoClick(memoBlock)}>
        <div className={`memo-block-inner ${memoBlock.flipped && 'memo-block-flipped'}`}>
            <div className="memo-block-front bg-gray-600">
            </div>
            <div className="memo-block-back">
                {memoBlock.emoji}
            </div>
        </div>
    </div>
)

export default MemoBlock;