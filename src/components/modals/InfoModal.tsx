import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="كيف ألعب" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
      خمن الكلمة في 6 محاولات. بعد كل تخمين ، لون المربع سوف
يغيير ويظهر لك مدى قرب تخمينك من الكلمة.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="م"
          status="correct"
        />
        <Cell value="ر" />
        <Cell value="ح" />
        <Cell value="ب" />
        <Cell value="ا" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
      الحرف (م) موجود في الكلمة وفي المكان الصحيح.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="ت" />
        <Cell value="خ" />
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="م"
          status="present"
        />
        <Cell value="ي" />
        <Cell value="ن" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
      الحرف (م) موجود في الكلمة ولكن في المكان الخطأ.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="م" />
        <Cell value="ح" />
        <Cell value="ا" />
        <Cell isRevealing={true} isCompleted={true} value="م" status="absent" />
        <Cell value="ي" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
      الحرف (م) ليس في الكلمة ابدا.      </p>

      <p className="mt-6 italic text-sm text-gray-500 dark:text-gray-300">
        This is an open source version of the word guessing game we all know and
        love -{' '}
        <a
          href="https://github.com/cwackerfuss/react-wordle"
          className="underline font-bold"
        >
          check out the code here
        </a>{' '}
      </p>
    </BaseModal>
  )
}
