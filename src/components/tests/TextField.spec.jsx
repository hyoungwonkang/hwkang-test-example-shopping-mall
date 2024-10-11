import { screen } from '@testing-library/react';
import React from 'react';

import TextField from '@/components/TextField';
import render from '@/utils/test/render';

it('className prop으로 설정한 css class가 적용된다.', async () => {
  await render(<TextField className="my-class" />);

  const textInput = screen.getByPlaceholderText('텍스트를 입력해 주세요.');

  screen.debug();

  expect(textInput).toHaveClass('my-class');
  // // 렌더링되는 DOM 구조가 올바르게 변경되었는지 확인
  // expect(screen.getByPlaceholderText('텍스트를 입력해 주세요.')).toHaveClass(
  //   'my-class',
  // );
});
