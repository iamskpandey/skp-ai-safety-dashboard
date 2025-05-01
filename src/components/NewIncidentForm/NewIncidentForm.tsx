import { useState} from 'react';
import { SeverityType, NewIncidentFormProps } from '../../types';
import Button from '../Buttons/Button';
import styles from './NewIncidentForm.module.css';
import { useDispatch } from 'react-redux';
import { addIncident } from '../../features/incidents/incidentsSlice';
import Toast from '../Toast/Toast';

export default function NewIncidentForm({ onCancel }: NewIncidentFormProps) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [severity, setSeverity] = useState<SeverityType>('Medium');
  const [errors, setErrors] = useState<{title?: string; description?: string}>({});
  const [showToast, setShowToast] = useState(false);

  const dispatch = useDispatch();
  
  const handleSubmit = () => {
    const newErrors: {title?: string; description?: string} = {};
    
    if (!title.trim()) {
      newErrors.title = 'Title is required';
    }
    
    if (!description.trim()) {
      newErrors.description = 'Description is required';
    }
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    const newIncident = {
      title: title.trim(),
      description: description.trim(),
      severity,
      reported_at: new Date().toISOString()
    };
    
    dispatch(addIncident(newIncident));
   
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
    
    setTitle('');
    setDescription('');
    setSeverity('Medium');
    setErrors({});
  };
  
  return (
    <div className={styles.formContainer}>
      <h2 className={styles.formTitle}>Report a New AI Safety Incident</h2>
      
      <div className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="title" className={styles.label}>Title</label>
          <input
            id="title"
            type="text"
            className={`${styles.input} ${errors.title ? styles.inputError : ''}`}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter the incident title"
          />
          {errors.title && <div className={styles.errorMessage}>{errors.title}</div>}
        </div>
        
        <div className={styles.formGroup}>
          <label htmlFor="description" className={styles.label}>Description</label>
          <textarea
            id="description"
            className={`${styles.textarea} ${errors.description ? styles.inputError : ''}`}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Describe the incident"
            rows={5}
          />
          {errors.description && <div className={styles.errorMessage}>{errors.description}</div>}
        </div>
        
        <div className={styles.formGroup}>
          <label htmlFor="severity" className={styles.label}>Severity Level</label>
          <select
            id="severity"
            className={styles.select}
            value={severity}
            onChange={(e) => setSeverity(e.target.value as SeverityType)}
          >
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>
        
        <div className={styles.formActions}>
          <Button title="Clear" variant="secondary" onClick={onCancel} />
          <Button title="Submit" onClick={handleSubmit} />
        </div>
      </div>
      {showToast && <Toast message="Incident reported successfully!" />}
    </div>
  );
}