import { screen } from '@testing-library/react';
import React from 'react';

import TextField from '@/components/TextField';
import render from '@/utils/test/render';

// *이렇게 하지 말것* 전역 변수를 사용한 조건 처리는 독립성을 보장하지 못하고, 신뢰성이 낮아짐.
let somecondition = false;

beforeEach(async () => {
  if (somecondition) {
    await render(<TextField className="my-class" />);
  } else {
    // ...
  }
});
it('className prop으로 설정한 css class가 적용된다.', async () => {
  await render(<TextField className="my-class" />);

  const textInput = screen.getByPlaceholderText('텍스트를 입력해 주세요.');

  expect(textInput).toHaveClass('my-class');
});

describe('placeholder', () => {
  it('기본 placeholder "텍스트를 입력해 주세요."가 노출된다.', async () => {
    await render(<TextField />);

    const textInput = screen.getByPlaceholderText('텍스트를 입력해 주세요.');

    expect(textInput).toBeInTheDocument();
  });

  it('placeholder prop에 따라 placeholder가 변경된다.', async () => {
    await render(<TextField placeholder="상품명을 입력해 주세요." />);

    const textInput = screen.getByPlaceholderText('상품명을 입력해 주세요.');

    expect(textInput).toBeInTheDocument();
  });
});
