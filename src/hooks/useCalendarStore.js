import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { onAddNewEvent, onSetActiveEvent } from '../store';

export const useCalendarStore = () => {

    const dispatch = useDispatch();
    const { events, activeEvent } = useSelector( state => state.calendar); 
    
    const setActiveEvent = (calendarEvent) => {
      dispatch( onSetActiveEvent(calendarEvent))
    }

    const startSavingEvent = async(calendarEvent) => {
      if( calendarEvent._id) {
        //actualizando
      } else{
        //creando
        dispatch( onAddNewEvent({...calendarEvent, _id: new Date().getTime() }))
      }
    }

  return {
    //Propiedades
    activeEvent,
    events,
    //metodos
    setActiveEvent,
    startSavingEvent,
  }
}
