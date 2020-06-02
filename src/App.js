import React, { useReducer, useRef, useEffect, useLayoutEffect, useCallback, forwardRef } from "react"
import PropTypes from 'prop-types';

import Tabletop from "tabletop"

import { map, keys, find, filter, sortBy, groupBy, uniqBy } from "lodash"

import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

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


function ShowDetail() {
  return <div>sdasf</div>;
}

function ShowListItem(entry) {
  return <div className='namelist__entry' key={entry.key}>
    <div className='namelist__line'>
      <div className='namelist__dot'></div>
    </div>
    <div className='namelist__date'>{format(entry.date, 'm.d.yyyy')}</div>
    <div className='namelist__details'>
      <div className='namelist__name'>{entry.name}</div>
      <div className='namelist__age'>Age {entry.age}</div>
      <div className='namelist__location'>{entry.city}, {entry.state}</div>
      {false && entry.image && <div className='namelist__image' style={{backgroundImage: `url("${entry.image}")` }}></div>}
    </div>
  </div>
}

function ShowList(entries) {
  return map(entries, ShowListItem)
}

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
    Tabletop.init( {
      key: 'https://docs.google.com/spreadsheets/d/1ZWIpWwkm5C0pERHiRkmHsYTmReG4F3KC38ofquCLJZY/edit?usp=sharing',
      simpleSheet: true }
    ).then(function(data, tabletop) { 
      dispatch({ type: "ENTRIES", entries: processEntries(data) })
   }) }, []);




  return (
    <Router>
    <div>
    <Switch>
          <Route exact path="/">
            <div className='namelist'>
              {ShowList(entries)}
            </div>
          </Route>
          <Route path="/:id" children={<ShowDetail entries={entries} />} />
        </Switch>
     </div>
    </Router>
  );
}

export default App;
