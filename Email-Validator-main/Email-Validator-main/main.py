##############################################################################
## Email-Validator                                                          ##
##                                                                          ##
##  This is a quick script which determines if an email exists or not.      ##
##  It is not guaranteed to work.                                           ##
##                                                                          ##
##  Made by MyBadProjects                                                   ##
##                                                                          ##
##############################################################################

from pyisemail import is_email
from email_validator import validate_email, EmailNotValidError
import os
import platform
import json
import logging
from tkinter import *
from tkinter.ttk import *

# Logger
#   This makes the logger 'global' not 'local', that's the easiest way to explain it
logger = logging.getLogger ( __name__ )


class interface:
    def __init__(self):
        # Load settings
        uiData = json.load ( open ( 'settings.json' ) )['data']['ui']

        # Create window
        interface_window = Tk ()
        interface_window.wm_title ( uiData['config']['title'] )
        interface_window.title = uiData['config']['title']
        interface_window.wm_minsize ( 250, 150 )
        interface_window.minsize ( 250, 150 )
        interface_window.wm_maxsize (
            round ( (250 * (1 / 2) + 1) * 2.5 + round ( (250 * (1 / 2) + 1) * 2.5 ) / 10 * 2 ) + 25,
            round ( (150 * (1 / 2) + 1) * 2.5 + round ( (150 * (1 / 2) + 1) * 2.5 ) / 10 * 2 ) )
        interface_window.maxsize (
            round ( (250 * (1 / 2) + 1) * 2.5 + round ( (250 * (1 / 2) + 1) * 2.5 ) / 10 * 2 ) + 25,
            round ( (150 * (1 / 2) + 1) * 2.5 + round ( (150 * (1 / 2) + 1) * 2.5 ) / 10 * 2 ) )

        # Create information
        lable_info = Label (
            interface_window,
            text='Email Validator\n'
                 'This determines is an email is valid.'
                 '\n'
        )
        lable_info.pack ()

        # Create inputs
        textbox = Entry (
            interface_window
        )
        textbox.pack ()

        def validateEmail():
            risk_local = False
            progress['value'] = 0

            email = textbox.get ()

            factor1 = is_email ( email.split ( "@", 1 )[-1] )
            factor2 = False
            try:
                validate_email ( email )
            except EmailNotValidError:
                factor2 = True

            print ( json.dumps ( {"output": {"factor1": factor1, "factor2": factor2}} ) .replace(' ', '') )

            for number in range ( 100 ):
                progress['value'] = number

            if factor1 is True and risk_local is not True:
                risk_local = True
            if factor2 is True and risk_local is not True:
                risk_local = True

            risklable['text'] = f'Not Valid: {risk_local}'

        risklable = Label (
            interface_window,
            text=f'No email has been tested yet.'
        )
        risklable.pack ()

        button = Button (
            interface_window,
            text='Check',
            command=validateEmail
        )
        button.pack ()

        # Progress bar
        progress = Progressbar (
            interface_window,
            orient=HORIZONTAL,
            length=100,
            mode='determinate'
        )
        progress.pack ()

        # Notes
        notes = Label (
            interface_window,
            text=f'\nPlease note that this program does not work without a wifi connection!'
        )
        notes.pack ()

        # Loop window
        interface_window.mainloop ()


def continueBoot():
    # Start the ui
    interface ()


def getLoggingMode(mode):
    type_gLM = mode.upper ()
    if type_gLM == "NOTSET":
        return logging.NOTSET
    elif type_gLM == "DEBUG":
        return logging.DEBUG
    elif type_gLM == "INFO":
        return logging.INFO
    elif type_gLM == "WARNING":
        return logging.WARNING
    elif type_gLM == "ERROR":
        return logging.ERROR
    elif type_gLM == "CRITICAL":
        return logging.CRITICAL


def attachLogs():
    # Load settings
    settings = json.load ( open ( 'settings.json' ) )
    logSettingsData = settings['data']['settings']['logging']
    logSettings = settings['settings']['logging']

    # Load variables
    filenameS = ''
    formatS = ''
    mode = ''

    # Apply settings to variables
    for type_check in logSettingsData:
        if type_check == 'filename':
            filenameS = logSettings[type_check]
        elif type_check == 'format':
            formatS = logSettings[type_check]
        elif type_check == 'mode':
            mode = logSettings[type_check]

    # Covert mode/level to logging
    modeF = getLoggingMode ( mode )  # modeF stands for 'mode formatted'

    # Create the logger
    # That has already been done at the start of the python script.

    # Create handlers
    console_handler = logging.StreamHandler ()
    file_handler = logging.FileHandler ( filenameS )

    # Create formatters
    console_format = logging.Formatter ( formatS )
    file_format = logging.Formatter ( formatS )

    # Apply formatters
    console_handler.setFormatter ( console_format )
    file_handler.setFormatter ( file_format )

    # Apply levels
    console_handler.setLevel ( modeF )
    file_handler.setLevel ( modeF )

    # Add the handlers to the logger
    logger.addHandler ( console_handler )
    logger.addHandler ( file_handler )


# Get and check if the platform the file is being execute on is supported or not
def checkSupport():
    # Load variables
    system_platform = platform.system ().lower ()
    supportedPlatforms = json.load ( open ( 'settings.json' ) )['data']['platforms']['supported']
    supported = False

    # Load Continue
    def continueLoad():
        window_notSupported.destroy ()
        continueBoot ()

    # Check is the platform is supported
    for platformType in supportedPlatforms:
        if system_platform == platformType.lower ():
            supported = True

    # If the platform is not supported, show a gui warning the user that this is not supported for their system
    if not supported:
        window_notSupported = Tk ()
        window_notSupported.wm_title ( 'Not supported platform!' )
        window_notSupported.title ( 'Not supported platform!' )
        lable = Label (
            window_notSupported,
            text=f'The platform that you are on ({platform.system ()} - {platform.platform ()})'
                 f'\n is not supported!'
                 f'\n'
                 f'\nInfo:'
                 f'\nSystem: {platform.system ()}'
                 f'\nPlatform: {platform.platform ()}'
                 f'\nOS Name: {os.name}',
            wraplength=450
        )

        lable.pack ()
        button = Button (
            window_notSupported,
            text=f'Continue',
            command=continueLoad
        )
        button.pack ()
        button2_local = Button (
            window_notSupported,
            text=f'Close',
            command=window_notSupported.destroy
        )
        button2_local.pack ()
        window_notSupported.mainloop ()
    else:
        continueBoot ()


# This executes the code
def run():
    # Start logs
    attachLogs ()

    # Check if system is supporter
    checkSupport ()


# This makes sure that the correct file is being launched
correctFile = json.load ( open ( 'settings.json' ) )['data']['fileinfo']['data']['name']
if __file__.endswith ( correctFile ):
    run ()
else:
    githubLink = 'None'
    window = Tk ()
    window.title ( 'Error' )
    description = Label (
        window,
        text=f'You are currently using a modified file!'
             f'\nThis is inplace to try and keep you safe from viruses!'
             f'\nPlease download the proper version of this at github.com.'
             f'\n'
             f'\nLink: {githubLink}'
             f'\nIf there is one, check "MyBadProject"\'s profile for \'Email-Validator\'!'
    )


    def bootRun():
        # Close current window
        window.destroy ()

        # Start 'run' function
        run ()


    description.pack ()
    button1 = Button (
        window,
        text='Continue',
        command=bootRun
    )
    button1.pack ()
    button2 = Button (
        window,
        text='Close',
        command=window.destroy
    )
    button2.pack ()
    window.mainloop ()
