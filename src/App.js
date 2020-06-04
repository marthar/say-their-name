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
    <header>
      <h1>Say Their Names</h1>
      <h2>These are the names of known black individuals murdered by the police between 2013 and 2020, concluding with George Floyd. It is almost impossible to scroll through the sheer volume of names listed here. Of equal importance are the names not listed: those of the friends, family, and loved ones left behind. <br/><br/>
      This violence extends well beyond the past seven years; the data does not.
      </h2> 
      <h3>
        Sources: <a href="https://mappingpoliceviolence.org/">Mapping Police Violence</a>, <a href="https://www.washingtonpost.com/graphics/investigations/police-shootings-database/">Washington Post</a>, <a href="https://killedbypolice.net/">Killed By Police</a>, and “<a href="https://www.npr.org/2020/05/29/865261916/a-decade-of-watching-black-people-die">A Decade of Watching Black People Die</a>,” an episode of NPR’s Code Switch . Names are typeset in <a href="https://www.vocaltype.co/history-of/martin">MARTIN</a> inspired by signage from the 1968 Memphis Sanitation Strike and designed by Tres Seal.
      </h3>
    </header>  

  <div className="button" id="side-button"><a href="https://docs.google.com/document/d/1zh6reFJWkZRGBL5iIezTfA2tkKBB3X9JcMh2QYT8tWk/mobilebasic">What You Can Do</a></div>    
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
