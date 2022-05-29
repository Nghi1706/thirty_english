import React from 'react'
import { Packs } from './helperVolcabulary';
import vocabularyAPI from '../api/vocavularyAPI';
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react'

const VocabularyStudentBody = () => {
  const [allVocabulary, setAllVocabulary] = useState([]);
  useEffect(() => {
    searchAllPacks()
  }, [])
  const searchAllPacks = async () => {
    var data = await vocabularyAPI.gelAllVocabularyPacks();
    if (data.status === 200) { setAllVocabulary(data.data); }
    else {
      alert("fetch data fail !");
    }

  }
  return (
    <div className='row'>
      <div className='col-xl-2'>

      </div>
      <div className='col-xl-8 p-3'>
        <Packs allVocabulary={allVocabulary} isTeacher={false} />
      </div>
      <div className='col-xl-2'>

      </div>
    </div>
  )
}

export default VocabularyStudentBody