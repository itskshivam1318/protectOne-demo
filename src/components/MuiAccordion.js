
import { Expand } from '@mui/icons-material'
import { Accordion, AccordionSummary, AccordionDetails, Typography, Divider } from '@mui/material'

export const MuiAccordion = ({ title, children }) => {
    return (
        <Accordion sx={{ border: "1px solid #1A989D", marginBottom: "12px", borderRadius: "15px" }}
            data-testid="cy-accordion">
            <AccordionSummary id={title} expandIcon={<Expand />}>
                <Typography >
                    {title}
                </Typography>
            </AccordionSummary>
            <Divider />
            <AccordionDetails>
                {children}

            </AccordionDetails>
        </Accordion>
    )
}