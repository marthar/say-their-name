import React, { useReducer, useRef, useEffect, useLayoutEffect, useCallback, forwardRef } from "react"
import PropTypes from 'prop-types';


import { map, keys, find, filter, sortBy, groupBy, uniqBy } from "lodash"

import {
  parse,
  format
} from "date-fns"


const initialState = {
  detail: null,
  entries: [],
  search: "",
  view: "posters"
}

const viewReducer = (state, action) => {
  switch(action.type) { 
    case "ENTRIES":
      return { ...state, entries: action.entries }
    case "SEARCH":
      return { ...state, search: action.value }
    case "VIEW":
      return { ...state, view: action.value }
    default:
      return state;

  }
}

function processEntries(data) {
  let entries = map(data, (entry,idx) => { 

    let date = (entry["date"]||"")
    date = parse(date,'m/d/y', new Date())

    return {
      key: idx,
      ...entry,
      date
    };
      
  })
  return entries;
}


function runSearch(entries, search) {
  let q = search.toLowerCase()
  return filter(entries, (entry) => {
    return entry.search.includes(q)
  })
}

function visitArticle(entry) {
  if(entry.article.startsWith("http://") ||
     entry.article.startsWith("htttps://")) {
    window.open(entry.article)
  }
}

function ShowListItem(entry) {
  return <div className='namelist__entry' key={entry.key} onClick={() => visitArticle(entry) }>
    <div className='namelist__line'>
      <div className='namelist__dot'></div>
    </div>
    <div className='namelist__date'>
      <div className='desktop'>{format(entry.date, 'm.d.yyyy')}</div>
      <div className='mobile'>{format(entry.date, 'm.d')}<br/>{format(entry.date, 'yyyy')}</div>
    </div>
    <div className='namelist__details'>
      <div className='namelist__name'>{entry.name}</div>
      {(parseInt(entry.age,10) > 0) && <div className='namelist__age'>Age {entry.age}</div>}
      <div className='namelist__location'>{entry.city}, {entry.state}</div>
      {false && entry.image && <div className='namelist__image' style={{backgroundImage: `url("${entry.image}")` }}></div>}
    </div>
  </div>
}

function ShowList(entries) {
  return map(entries, ShowListItem)
}

let scrollReset = 0;
let lastScroll = 0;
let paused = false;
let everScrolled = false;

let lastTime = 0;

function scrollTimer() {
  lastTime = performance.now();
  window.requestAnimationFrame((curTime) => {

    if(everScrolled) {
      if(scrollReset > 0) {
        scrollReset -= 1;
      } else if(!paused) {
        let diff  = Math.round((curTime - lastTime) / 10);

        lastScroll = window.scrollY + diff;
        window.scroll(0,lastScroll);
      }
    }

    lastTime = curTime;

    scrollTimer();
  });

}


function handleVisibilityChange() {
  if (document[hidden]) {
    paused = true;
  } else {
    scrollReset = 30;
    paused = false;
  }
}

window.addEventListener("scroll",() => {
  if(!everScrolled) {
    everScrolled = true;
    scrollReset = 50;
  }
  else if(lastScroll != window.scrollY && window.scrollY > 0) {
    scrollReset = 100;
  }
})

var hidden, visibilityChange; 
if (typeof document.hidden !== "undefined") { // Opera 12.10 and Firefox 18 and later support 
  hidden = "hidden";
  visibilityChange = "visibilitychange";
} else if (typeof document.msHidden !== "undefined") {
  hidden = "msHidden";
  visibilityChange = "msvisibilitychange";
} else if (typeof document.webkitHidden !== "undefined") {
  hidden = "webkitHidden";
  visibilityChange = "webkitvisibilitychange";
}

document.addEventListener(visibilityChange, handleVisibilityChange, false);



function App() {
  const [
    {
      detail,
      entries,
      search,
      view
    },
    dispatch
  ] = useReducer(viewReducer, initialState)


  useEffect(() => { 
    fetch("names.json")
     .then(response => response.json())
     .then(data => {
      dispatch({ type: "ENTRIES", entries: processEntries(data) })
      scrollTimer();
   }) }, []);




  return (
    <div>
    <header>
      <h1>Say Their Names</h1>
      <h2>These are the names of known black individuals killed by the police between 2013 and 2020, concluding with George Floyd. It is almost impossible to scroll through the sheer volume of names listed here. Of equal importance are the names not listed: those of the friends, family, and loved ones left behind. <br/><br/>
      This violence extends well beyond the past seven years; the data does not.
      </h2> 
      <h3>
        Sources: <a href="https://mappingpoliceviolence.org/">Mapping Police Violence</a>, <a href="https://www.washingtonpost.com/graphics/investigations/police-shootings-database/">Washington Post</a>, <a href="https://killedbypolice.net/">Killed By Police</a>, and “<a href="https://www.npr.org/2020/05/29/865261916/a-decade-of-watching-black-people-die">A Decade of Watching Black People Die</a>,” an episode of NPR’s Code Switch. Names are typeset in <a href="https://www.vocaltype.co/history-of/martin">MARTIN</a> inspired by signage from the 1968 Memphis Sanitation Strike and designed by Tr&eacute;s Seals.<br/><br/>
        <a href="mailto:saytheirnames.us@gmail.com">Talk with us.</a>
      </h3>
      <div className="date-exp">data begins in<br/>2013</div>
    </header>  

    <div className="button" id="side-button"><a href="https://docs.google.com/document/d/1zh6reFJWkZRGBL5iIezTfA2tkKBB3X9JcMh2QYT8tWk/mobilebasic">What You Can Do</a></div>    
      <div className='namelist'>
        {ShowList(entries)}
      </div>
  </div>
  );
}

export default App;
